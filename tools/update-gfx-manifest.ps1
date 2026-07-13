$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$gfxDir = Join-Path $root "src\assets\gfx"
$manifestPath = Join-Path $gfxDir "manifest.js"
$allowed = @(".png", ".jpg", ".jpeg", ".webp", ".gif")

if (-not (Test-Path -LiteralPath $gfxDir)) {
  New-Item -ItemType Directory -Force -Path $gfxDir | Out-Null
}

$items = Get-ChildItem -LiteralPath $gfxDir -File |
  Where-Object { $allowed -contains $_.Extension.ToLowerInvariant() } |
  Sort-Object Name |
  ForEach-Object {
    $name = [IO.Path]::GetFileNameWithoutExtension($_.Name)
    $title = ($name -replace "[-_]+", " ").Trim()
    if ($title.Length -gt 0) {
      $title = (Get-Culture).TextInfo.ToTitleCase($title)
    }

    [PSCustomObject]@{
      src = "src/assets/gfx/$($_.Name)"
      title = $title
    }
  }

$json = $items | ConvertTo-Json -Depth 4
if ($items.Count -eq 1) {
  $json = "[$json]"
}

$content = "window.SWAT_GFX_ASSETS = $json;`n"
Set-Content -LiteralPath $manifestPath -Value $content -Encoding UTF8

Write-Host "Manifest atualizado com $($items.Count) imagem(ns): $manifestPath"

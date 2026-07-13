# SWATDev Portfolio

Portfolio estatico dark da SWATDev para apresentacao de GFX, banners, icons, thumbnails, identidade visual e contato comercial.

## Estrutura

- `index.html`: pagina principal.
- `src/styles.css`: estilos do site.
- `src/script.js`: interacoes leves.
- `src/assets/images/`: imagens, logo e prints do portfolio.
- `src/assets/gfx/`: coloque aqui banners, icons, thumbnails e outras GFX.
- `tools/update-gfx-manifest.ps1`: atualiza a lista de GFX exibida no site.

Abra `index.html` no navegador para visualizar.

## Adicionar novas GFX

1. Coloque a imagem em `src/assets/gfx/`.
2. Rode no PowerShell:

```powershell
.\tools\update-gfx-manifest.ps1
```

O site atualiza o fundo animado e a vitrine automaticamente a partir dessa lista.

As imagens aparecem como preview protegido no site, com bloqueio de clique direito/arrastar e blur temporário em atalhos comuns de captura. Para maior segurança, use sempre previews menores no portfolio e guarde os arquivos finais fora da pasta pública do site.

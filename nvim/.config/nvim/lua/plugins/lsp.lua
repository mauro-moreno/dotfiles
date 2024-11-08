return {
  {
    "williamboman/mason.nvim",
    opts = function(_, opts)
      vim.list_extend(opts.ensure_installed, {
        "stylua",
        "selene",
        "luacheck",
        "shellcheck",
        "shfmt",
        "tailwindcss-language-server",
        "typescript-language-server",
        "css-lsp",
        "gopls",
        "prettier",
      })
    end,
  },
  {
    "neovim/nvim-lspconfig",
    opts = {
      inlay_hints = {
        enabled = false,
      },

      -- Customize the LSP setup for HTML and HTMX
      setup = {
        html = function(_, opts)
          local lspconfig = require("lspconfig")
          local capabilities = vim.lsp.protocol.make_client_capabilities()
          -- Setup specific options for HTML LSP
          lspconfig.html.setup({
            on_attach = opts.on_attach,      -- Use LazyVim's default on_attach
            capabilities = capabilities,     -- Customize capabilities if needed
            filetypes = { "html", "templ" }, -- Add your custom file types
          })
        end,

        htmx = function(_, opts)
          local lspconfig = require("lspconfig")
          local capabilities = vim.lsp.protocol.make_client_capabilities()
          -- Setup specific options for HTML LSP
          lspconfig.html.setup({
            on_attach = opts.on_attach,      -- Use LazyVim's default on_attach
            capabilities = capabilities,     -- Customize capabilities if needed
            filetypes = { "html", "templ" }, -- Add your custom file types
          })
        end,

        tailwindcss = function(_, opts)
          local lspconfig = require("lspconfig")
          local capabilities = vim.lsp.protocol.make_client_capabilities()
          local filetypes = { "html", "templ", "astro", "javascript", "typescript", "react" }
          -- Setup specific options for HTML LSP
          lspconfig.html.setup({
            on_attach = opts.on_attach,  -- Use LazyVim's default on_attach
            capabilities = capabilities, -- Customize capabilities if needed
            filetypes = filetypes,       -- Add your custom file types
          })
        end,
      },
    },
  },
}

-- Language Server Protocol

return {
  'neovim/nvim-lspconfig',
  event = 'VeryLazy',
  dependencies = {
    'mason-org/mason.nvim',
    'mason-org/mason-lspconfig.nvim',
    'b0o/schemastore.nvim',
  },
  config = function()
    require('mason').setup({
      ui = { height = 0.8 },
    })
    require('mason-lspconfig').setup({
      ensure_installed = {
        'intelephense',
        'vue_ls',
        'ts_ls',
        'tailwindcss',
        'jsonls',
        'lua_ls',
      },
    })

    vim.lsp.config('*', {
      capabilities = require('blink.cmp').get_lsp_capabilities(),
    })

    -- PHP
    vim.lsp.config('intelephense', {
      commands = {
        IntelephenseIndex = {
          function()
            vim.lsp.buf.execute_command({ command = 'intelephense.index.workspace' })
          end,
        },
      },
    })

    -- Vue (disable formatting — handled by conform)
    vim.api.nvim_create_autocmd('LspAttach', {
      callback = function(args)
        local client = vim.lsp.get_client_by_id(args.data.client_id)
        if client and client.name == 'vue_ls' then
          client.server_capabilities.documentFormattingProvider = false
          client.server_capabilities.documentRangeFormattingProvider = false
        end
      end,
    })

    -- TypeScript / Vue
    vim.lsp.config('ts_ls', {
      init_options = {
        plugins = {
          {
            name = "@vue/typescript-plugin",
            location = "/usr/local/lib/node_modules/@vue/typescript-plugin",
            languages = { "javascript", "typescript", "vue" },
          },
        },
      },
      filetypes = {
        "javascript",
        "javascriptreact",
        "javascript.jsx",
        "typescript",
        "typescriptreact",
        "typescript.tsx",
        "vue",
      },
    })

    -- JSON
    vim.lsp.config('jsonls', {
      settings = {
        json = {
          schemas = require('schemastore').json.schemas(),
        },
      },
    })

    -- Lua
    vim.lsp.config('lua_ls', {
      settings = {
        Lua = {
          runtime = { version = 'LuaJIT' },
          workspace = {
            checkThirdParty = false,
            library = {
              '${3rd}/luv/library',
              unpack(vim.api.nvim_get_runtime_file('', true)),
            },
          },
        },
      },
    })

    vim.lsp.enable({
      'intelephense',
      'vue_ls',
      'ts_ls',
      'tailwindcss',
      'jsonls',
      'lua_ls',
    })

    -- Keymaps
    vim.keymap.set('n', '<Leader>d', '<cmd>lua vim.diagnostic.open_float()<CR>')
    vim.keymap.set('n', 'gd', ':Telescope lsp_definitions<CR>')
    vim.keymap.set('n', 'ga', '<cmd>lua vim.lsp.buf.code_action()<CR>')
    vim.keymap.set('n', 'gi', ':Telescope lsp_implementations<CR>')
    vim.keymap.set('n', 'gr', ':Telescope lsp_references<CR>')
    vim.keymap.set('n', '<Leader>lr', ':LspRestart<CR>', { silent = true })
    vim.keymap.set('n', 'K', '<cmd>lua vim.lsp.buf.hover()<CR>')
    vim.keymap.set('n', '<Leader>rn', '<cmd>lua vim.lsp.buf.rename()<CR>')

    vim.diagnostic.config({
      virtual_text = false,
      float = { source = true },
      signs = {
        text = {
          [vim.diagnostic.severity.ERROR] = '',
          [vim.diagnostic.severity.WARN]  = '',
          [vim.diagnostic.severity.INFO]  = '',
          [vim.diagnostic.severity.HINT]  = '',
        },
      },
    })
  end,
}

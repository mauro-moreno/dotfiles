-- Completion

return {
  'saghen/blink.cmp',
  version = '*',
  dependencies = { 'onsails/lspkind-nvim' },
  opts = {
    keymap = {
      preset = 'none',
      ['<Tab>'] = { 'select_next', 'snippet_forward', 'fallback' },
      ['<S-Tab>'] = { 'select_prev', 'snippet_backward', 'fallback' },
      ['<CR>'] = { 'accept', 'fallback' },
    },

    completion = {
      list = {
        selection = {
          preselect = false,
          auto_insert = false,
        },
      },
      menu = {
        draw = {
          columns = {
            { 'kind_icon' },
            { 'label', gap = 1 },
            { 'kind' },
          },
          components = {
            kind_icon = {
              text = function(ctx)
                return require('lspkind').symbolic(ctx.kind, { mode = 'symbol' }) .. ctx.icon_gap
              end,
              highlight = function(ctx)
                if ctx.kind == 'Color' and ctx.item.documentation then
                  local doc = ctx.item.documentation
                  local text = type(doc) == 'table' and doc.value or doc
                  local _, _, r, g, b = string.find(text, '^rgb%((%d+), (%d+), (%d+)')
                  if r then
                    local color = string.format('%02x%02x%02x', tonumber(r), tonumber(g), tonumber(b))
                    local group = 'Tw_' .. color
                    if vim.fn.hlID(group) < 1 then
                      vim.api.nvim_set_hl(0, group, { fg = '#' .. color })
                    end
                    return group
                  end
                end
                return 'BlinkCmpKind' .. ctx.kind
              end,
            },
            kind = {
              text = function(ctx)
                return '  ' .. ctx.kind .. ' (' .. ctx.source_name .. ')'
              end,
              highlight = 'SpecialComment',
            },
          },
        },
      },
    },

    signature = { enabled = true },

    snippets = { preset = 'luasnip' },

    sources = {
      default = { 'lsp', 'path', 'snippets', 'buffer' },
      providers = {
        lsp      = { name = 'LSP' },
        buffer   = { name = 'Buffer' },
        path     = { name = 'Path' },
        snippets = { name = 'LuaSnip' },
      },
    },
  },
}

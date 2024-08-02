import "../blocks/css/blocks"

export const cssCategory = {
  kind: "category",
  name: "CSS",
  
  colour: "#f55142",
  contents: [
    {
      kind: "block",
      type: "html_css",
    },
    {
      kind: "block",
      type: "style_block",
    },
    {
      kind: "block",
      type: "style_block_inline",
    },
    {
      kind: "block",
      type: "addclassid",
    },
    {
      kind: "category",
      name: "Colors",
      colour: "#f28177",
      contents: [
        {
          kind: "block",
          type: "css_bg_color",
        },
        {
          kind: "block",
          type: "css_text_color",
        },
        {
          kind: "block",
          type: "css_border_color",
        },
      ],
    },
    {
      kind: "category",
      name: "Text",
      colour: "#f28177",
      contents: [
        {
          kind: "block",
          type: "css_font_size",
        },
        {
          kind: "block",
          type: "css_font_family",
        },
        {
          kind: "block",
          type: "css_text_align",
        },
      ],
    },
    {
      kind: "category",
      name: "Size and Spaceing",
      colour: "#f28177",
      contents: [
        {
          kind: "block",
          type: "css_height",
        },
        {
          kind: "block",
          type: "css_width",
        },
        {
          kind: "block",
          type: "css_marginPadding",
        }
      ],
    },
    {
      kind: "category",
      name: "Borders",
      colour: "#f28177",
      contents: [
        {
          kind: "block",
          type: "css_bloc_style",
        },
        {
          kind: "block",
          type: "css_borderRadius",
        },
        {
          kind: "block",
          type: "css_border_color",
        },
      ],
    },
    {
      kind: "category",
      name: "Layout",
      colour: "#f28177",
      contents: [
        {
          kind: "block",
          type: "css_flexbox",
        },
        {
          kind: "block",
          type: "css_flexbox_wrap",
        },
        {
          kind: "block",
          type: "css_flexbox_justify",
        },
        {
          kind: "block",
          type: "css_flexbox_align",
        },
        {
          kind: "block",
          type: "css_flexbox_align_row",
        },
        {
          kind: "block",
          type: "css_flexbox_grow",
        },
        {
          kind: "block",
          type: "style_block_Position",
        },
      ],
    },
    {
      kind: "category",
      name: "More",
      colour: "#f28177",
      contents: [
        {
          kind: "block",
          type: "css_bg_color",
        },
        {
          kind: "block",
          type: "css_custom",
        },
      ],
    },
  ],
};

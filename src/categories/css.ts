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
          type: "css_padding",
        },
        {
          kind: "block",
          type: "css_margin",
        },
      ],
    },
    {
      kind: "category",
      name: "Positioning",
      colour: "#f28177",
      contents: [
        {
          kind: "block",
          type: "css_bg_color",
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
          type: "css_bg_color",
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

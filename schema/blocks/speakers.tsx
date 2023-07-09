import { backgroundSchema } from "../background"
import { buttonsSchema } from "../buttons"
import { contentSchema } from "../content"
import { iconOptions } from "../options"
import { imageSchema } from '../image';
import { navigationLabelSchema } from "../navigation-label";
import { typographySchema } from "../typography"

export const speakersBlockSchema: any = {
  name: "speakers",
  label: "Speakers",
  ui: {
    defaultItem: {
      label: "",
      headline: "Speakers",
      subhead: "",
      body: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [
              {
                type: 'text',
                text: "Past SBS events have featured a diverse range of speakers, including representatives from the UNFCCC, UNESCO, government officials, legacy energy industry leaders, NGO's and leaders from web3 and ReFi projects. SBS Earth speaker lineup to be announced soon.",
              },
            ],
          },
        ],
      },
      style: {
        alignment: "flex-col-reverse items-center gap-12",
        padding: "pt-28 pb-48 pr-10 pl-10 sm:pt-10 sm:pb-10 sm:pr-5 sm:pl-5",
        featureContent: "w-full min-h-0 text-center",
        labelStyles: "text-black undefined undefined",
        headlineStyles: "text-accent3 mg-headline-medium mb-16",
        subheadStyles: "text-black undefined undefined",
        textStyles: "text-white mg-copy undefined",
      },
      cardStyle: {
        fillStyles: "bg-white opacity-100",
        grid: "grid-cols-2 justify-center gap-6",
        alignment: "flex-row items-center  text-left",
        image: "wpx-130  object-center object-fill",
        imagePadding: "pt-5 pb-5 pr-0 pl-5",
        contentPadding: "pt-14 pb-0 pr-5 pl-5",
        borderStyles: "border-accent2 border-l-4",
        labelStyles: "text-black mg-copy mb-0",
        headlineStyles: "text-black mg-card-name mb-3.5",
        subheadStyles: "text-black mg-card-title mb-0",
        textStyles: "text-black mg-copy undefined",
        buttonLayout: "undefined",
        buttonWidth: "undefined",
      },
      background: {
        fillStyles: ' opacity-100',
        src: "",
        style: "bg-cover",
        position: "bg-center",
      },
      items: [
        {
          image: {
            src: "/uploads/jasonjay.webp"
          },
          headline: "Jason Jay",
          subhead: "MIT Sloan School of Management",
        },
        {
          image: {
            src: "/uploads/clement.webp"
          },
          headline: "Benoît Clément",
          subhead: "Verra",
        },
        {
          image: {
            src: "/uploads/kaya.webp"
          },
          headline: "Fikriye Colette Kaya",
          subhead: "'CERN, Tufts University'",
        },
        {
          image: {
            src: "/uploads/jaye2.webp"
          },
          headline: "Jaye Connolly-LaBelle",
          subhead: "Caelum Resources",
        },
        {
          image: {
            src: "/uploads/soloway.webp"
          },
          headline: "Joshua Soloway",
          subhead: "Ethicstream",
        },
        {
          image: {
            src: "/uploads/miller.webp"
          },
          headline: "Doug Miller",
          subhead: "Clean Energy Buyers Institute",
        },
        {
          image: {
            src: "/uploads/ranganathan.webp"
          },
          headline: "Nirvaan Ranganathan",
          subhead: "Climate Collective",
        },
        {
          image: {
            src: "/uploads/sandal.webp"
          },
          headline: "Simge Sandal",
          subhead: "GainForest",
        },
        {
          image: {
            src: "/uploads/shadrin.webp"
          },
          headline: "Alexey Shadrin",
          subhead: "Evercity",
        },
        {
          image: {
            src: "/uploads/geisenberger.webp"
          },
          headline: "Wes Geisenberger",
          subhead: "HBAR Foundation",
        },
        {
          image: {
            src: "/uploads/murphy.webp"
          },
          headline: "Erin Murphy",
          subhead: "Topl",
        },
        {
          image: {
            src: "/uploads/kaasovic.webp"
          },
          headline: "Jason Kaasovic",
          subhead: "Web3 Renewables",
        },
      ],
    },
  },
  fields: [
    {
      type: "object",
      label: "Section Styles",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "alignmentControl",
          },
        },
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Content",
          name: "featureContent",
          type: "string",
          ui: {
            component: "featureContentControl",
          }
        },
        ...typographySchema
      ],
    },
    {
      type: "object",
      label: "Card Style",
      name: "cardStyle",
      ui: {
        component: "group",
      },
      fields: [
        {
          type: "string",
          label: "Background",
          name: "fillStyles",
          ui: {
            component: "fillControl"
          }
        },
        {
          label: "Grid",
          name: "grid",
          type: "string",
          ui: {
            component: "gridControl",
          },
        },
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "cardAlignmentControl",
          },
        },
        {
          label: "Image",
          name: "image",
          type: "string",
          ui: {
            component: "imageControl",
          }
        },
        {
          label: "Image Padding",
          name: "imagePadding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Content Padding",
          name: "contentPadding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          type: "string",
          label: "Border",
          name: "borderStyles",
          ui: {
            component: "borderControl"
          }
        },
        ...typographySchema,
        {
          label: "Button",
          name: "buttonTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Button Style",
          name: "buttonType",
          ui: {
            component: "buttonControl",
          },
        },
        {
          type: "string",
          label: "Button Icon",
          name: "buttonIcon",
          ui: {
            component: "select",
          },
          options: iconOptions,
        },
        {
          label: "Layout",
          name: "buttonLayout",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Under Content", value: "justify-start" },
            { label: "Bottom", value: "justify-between" },
          ],
        },
        {
          label: "Width",
          name: "buttonWidth",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Auto", value: "w-auto" },
            { label: "Full", value: "w-full" },
          ],
        },
      ],
    },
    backgroundSchema,
    ...contentSchema,
    {
      type: "object",
      label: "Speakers",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          label: "",
          headline: "Name",
          subhead: "Title",
        }
      },
      itemProps: (item) => ({
        label: `${item.label} ${item.headline}`,
      }),
      fields: [
        imageSchema,
        {
          label: "Name",
          name: "headline",
          type: "string",
        },
        {
          label: "Title",
          name: "subhead",
          type: "string",
        },
      ],
    },
    buttonsSchema,
    navigationLabelSchema,
  ],
};
import { buttonsSchema } from "../buttons"
import { backgroundSchema } from "../background"
import { contentSchema } from "../content"
import { navigationLabelSchema } from "../navigation-label";
import { typographySchema } from "../typography"
import { imageSchema } from '../image';

const defaultCard = {
  headline: "Headline",
  subhead: "Subhead",
};

export const sponsorsBlockSchema: any = {
  name: "sponsors",
  label: "Sponsors",
  ui: {
    defaultItem: {
      style: {
        padding: 'pt-20 pb-20 pr-20 pl-20 sm:pt-10 sm:pb-10 sm:pr-5 sm:pl-5',
        headlineStyles: 'text-white mg-headline-medium undefined'
      },
      background: {
        fillStyles: "opacity-100",
        src: "/uploads/bg-sponsors.jpg",
        style: "bg-cover",
        position: "bg-center",
      },
      partners: [
        {
          src: "/uploads/protocol.svg"
        },
        {
          src: "/uploads/filecoin-foundation.svg"
        }
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
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
      ],
    },
    backgroundSchema,
    {
      type: "object",
      label: "Sponsors",
      name: "sponsors",
      list: true,
      itemProps: (item) => ({
        label: item.src?.replace('/uploads/', ''),
      }),
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        }
      ],
    },
    {
      type: "object",
      label: "Partners",
      name: "partners",
      list: true,
      itemProps: (item) => ({
        label: item.src?.replace('/uploads/', ''),
      }),
      fields: [
        {
          label: "Image Source",
          name: "src",
          type: "image",
          ui: {
            clearable: true,
          }
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        }
      ],
    },
    navigationLabelSchema,
  ],
};
import { backgroundSchema } from "../background"
import { navigationLabelSchema } from "../navigation-label";
import { typographySchema } from "../typography"

const defaultCard = {
  headline: "Headline",
  style: {
    labelStyles: "text-black",
    headlineStyles: "text-black",
    subheadStyles: "text-black",
    textStyles: "text-black",
  },
};

export const timelineBlockSchema: any = {
  name: "timeline",
  label: "Timeline",
  ui: {
    defaultItem: {
      headline: "Timeline",
      style: {
        alignment: "flex-row items-center gap-0",
        padding: "pt-20 pb-20 pr-10 pl-10",
        featureContent: "w-1/2 min-h-0 text-left",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
      timelines: [defaultCard, defaultCard],
    },
  },
  fields: [
    {
      type: "object",
      label: "Style",
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
      ]
    },
    {
      type: "object",
      label: "Timeline Style",
      name: "timelineStyle",
      ui: {
        component: "group",
      },
      fields: [
        ...typographySchema,
      ],
    },
    backgroundSchema,
    {
      label: "",
      name: "rule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "rich-text",
    },
    {
      label: "Timelines",
      name: "timelines",
      type: "object",
      list: true,
      ui: {
        component: 'itemListField',
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Headline",
          name: "headline",
          type: "string",
        },
        {
          label: "Subhead",
          name: "subhead",
          type: "string",
        },
        {
          label: "Body",
          name: "body",
          type: "rich-text",
        },
        {
          label: "Events",
          name: "events",
          type: "object",
          list: true,
          ui: {
            component: 'itemListField',
          },
          fields: [
            {
              label: "Time",
              name: "time",
              type: "string",
            },
            {
              label: "Headline",
              name: "headline",
              type: "string",
            },
            {
              label: "Subhead",
              name: "subhead",
              type: "string",
            },
          ]
        }
      ]
    },
    {
      label: "",
      name: "rule2",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    navigationLabelSchema,
  ],
}
import { buttonsSchema } from "../buttons"
import { backgroundSchema } from "../background"
import { contentSchema } from "../content"
import { imageSchema } from '../image';
import { navigationLabelSchema } from "../navigation-label";
import { typographySchema } from "../typography"

export const ctaBlockSchema: any = {
  label: "Call to Action",
  name: "cta",
  ui: {
    defaultItem: {
      body: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [
              {
                type: 'text',
                text: "Engage with inspiring keynotes and interactive panels of global experts, and discover how sustainable blockchain solutions can reshape our future."
              },
            ],
          },
          {
            type: 'p',
            children: [
              {
                type: 'text',
                text: "Register now for this virtual adventure and join the movement to harness blockchain's potential for a cleaner, more sustainable tomorrow."
              },
            ],
          },
        ],
      },
      style: {
        alignment: "flex-col-reverse items-center",
        padding: "pt-20 pb-14 pr-20 pl-20 sm:pt-10 sm:pb-9 sm:pr-5 sm:pl-5",
        featureImage: "mx-auto",
        featureContent: "w-full min-h-0 text-left",
        labelStyles: "text-black undefined undefined",
        headlineStyles: "text-black undefined undefined",
        subheadStyles: "text-black undefined undefined",
        textStyles: "text-white mg-copy-large mb-3.5",
      },
      background: {
        fillStyles: "opacity-100",
        wrapFillStyles: "opacity-100",
        src: "/uploads/lead-in-bg.webp",
        style: "bg-cover",
        position: "bg-center",
        ornaments: [
          {
            src: "/uploads/dandelion.webp",
            alignment: "bottom",
            height: "430",
            xOffset: "-600",
            yOffset: ""
          }
        ]
      },
    },
  },
  fields: [
    {
      label: "Section Style",
      name: "style",
      type: "object",
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
          label: "Image",
          name: "featureImage",
          type: "string",
          ui: {
            component: "featureImageControl",
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
        {
          label: "Buttons",
          name: "buttonsLayout",
          type: "string",
          ui: {
            component: "buttonsLayoutControl",
          },
        },
        ...typographySchema,
      ],
    },
    backgroundSchema,
    imageSchema,
    ...contentSchema,
    buttonsSchema,
    navigationLabelSchema,
  ],
};
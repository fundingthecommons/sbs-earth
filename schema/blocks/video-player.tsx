import { backgroundSchema } from "../background"
import { navigationLabelSchema } from "../navigation-label";
import { imageSchema } from '../image';

const defaultCard = {
  title: "Project Name",
  city: "City Name",
  description: "Lorem ipsum dolor",
  time: "10:34"
};

export const videoPlayerBlockSchema: any = {
  label: "Video Player",
  name: "videoPlayer",
  ui: {
    defaultItem: {
      background: {
        style: "bg-cover",
        position: "bg-center",
      },
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
    backgroundSchema,
    {
      type: "object",
      label: "Cards",
      name: "items",
      list: true,
      itemProps: (item) => ({
        label: item.title,
      }),
      fields: [
        imageSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "City",
          name: "city",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
        },
        {
          type: "string",
          label: "Link",
          name: "link",
        },
        {
          type: "string",
          label: "Video",
          name: "video",
        },
        {
          type: "string",
          label: "Time",
          name: "time",
        },
        {
          type: "number",
          label: "Pin Vertical Percent",
          name: "top",
        },
        {
          type: "number",
          label: "Pin Horizontal Percent",
          name: "left",
        }
      ],
    },
    navigationLabelSchema,
  ],
};
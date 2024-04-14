import { DocumentIcon, ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  icon: DocumentIcon,
  liveEdit: false,
  fields: [
    defineField({
      name: "title",
      description: "This field is the title of your project.",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "authors",
      description:
        "Authors of the publication",
      title: "Authors",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      description:
        "This image will be used as the cover image for the publication.",
      type: "image",
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: "site",
      title: "Site",
      type: "url",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          {title: "File", value: "file"},
          {title: "URL", value: "url"},
        ],
        layout: "radio", // Display as radio buttons
      },
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
      hidden: ({parent}) => parent?.type !== "file", // Only show this field if 'type' is 'file'
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      hidden: ({parent}) => parent?.type !== "url", // Only show this field if 'type' is 'url'
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "Abstract",
      title: "Publication Summary",
      type: "array",
      description: "A brief synopsis of the publication hypothesis",
      of: [
        defineArrayMember({
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "Url",
                  },
                ],
              },
            ],
            decorators: [
              {
                title: "Italic",
                value: "em",
              },
              {
                title: "Strong",
                value: "strong",
              },
            ]
          },
          styles: [],
        }),
      ],
    }),
  ],
});

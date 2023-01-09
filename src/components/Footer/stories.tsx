import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer, FooterPrpos } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: "Olá Story"
  },
} as Meta;

export const Template: Story<FooterPrpos> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};

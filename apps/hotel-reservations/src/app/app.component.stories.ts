import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

const meta: Meta<AppComponent> = {
  component: AppComponent,
  title: 'AppComponent',
  decorators: [
    applicationConfig({
      providers: [provideHttpClient(withFetch())],
    }),
  ],
};
export default meta;
type Story = StoryObj<AppComponent>;

export const Primary: Story = {
  args: {},
};

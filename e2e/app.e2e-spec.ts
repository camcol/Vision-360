import { VisionPage } from './app.po';

describe('vision App', () => {
  let page: VisionPage;

  beforeEach(() => {
    page = new VisionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

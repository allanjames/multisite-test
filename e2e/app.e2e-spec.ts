import { MultisiteAppPage } from './app.po';

describe('multisite-app App', () => {
  let page: MultisiteAppPage;

  beforeEach(() => {
    page = new MultisiteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

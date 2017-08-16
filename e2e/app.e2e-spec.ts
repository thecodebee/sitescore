import { SitescorePage } from './app.po';

describe('sitescore App', () => {
  let page: SitescorePage;

  beforeEach(() => {
    page = new SitescorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

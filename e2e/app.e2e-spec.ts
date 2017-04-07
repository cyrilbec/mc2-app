import { Mc2AppPage } from './app.po';

describe('mc2-app App', () => {
  let page: Mc2AppPage;

  beforeEach(() => {
    page = new Mc2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mc2 works!');
  });
});

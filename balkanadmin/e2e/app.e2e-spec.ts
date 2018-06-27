import { BalkanadminPage } from './app.po';

describe('balkanadmin App', function() {
  let page: BalkanadminPage;

  beforeEach(() => {
    page = new BalkanadminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

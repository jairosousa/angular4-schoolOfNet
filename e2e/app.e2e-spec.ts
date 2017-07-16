import { AngularHelloWordPage } from './app.po';

describe('angular-hello-word App', () => {
  let page: AngularHelloWordPage;

  beforeEach(() => {
    page = new AngularHelloWordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

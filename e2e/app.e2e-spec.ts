import { GoogleAnalyticsAppPage } from './app.po';

describe('google-analytics-app App', function() {
  let page: GoogleAnalyticsAppPage;

  beforeEach(() => {
    page = new GoogleAnalyticsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

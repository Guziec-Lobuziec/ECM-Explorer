import { SearchViewModule } from './search-view.module';

describe('SearchViewModule', () => {
  let searchViewModule: SearchViewModule;

  beforeEach(() => {
    searchViewModule = new SearchViewModule();
  });

  it('should create an instance', () => {
    expect(searchViewModule).toBeTruthy();
  });
});

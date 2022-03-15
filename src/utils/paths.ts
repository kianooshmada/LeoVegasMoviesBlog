import { MovieBaseInterface } from '../models/movie/movie-base-interface';
class Uri {
  url: string;
  route: string;
  constructor(url: string, route?: string) {
    this.url = url;
    this.route = route || url;
  }

  getPath() {
    return this.url;
  }

  getAbsolutePath() {
    return process.env.DOMAIN + this.url;
  }

  getRoute() {
    return this.route;
  }
}

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-zآ-ی0-9]+/g, '-')
    .replace(/^-+|-+$/g, '-')
    .replace(/^-+|-+$/g, '');
};

class Paths {
  static home() {
    return new Uri('/');
  }

  static signin() {
    return new Uri('/signin');
  }

  static contact() {
    return new Uri('/contact');
  }

  static about() {
    return new Uri('/about');
  }

  static profile = class {
    static base = '/profile';
    static index() {
      return new Uri(this.base);
    }

    static account() {
      return new Uri(this.base + '/account');
    }

    static password() {
      return new Uri(this.base + '/password');
    }
  };

  static movie = class {
    static base = '/movie';

    static list(pageNumber: number = 1, primary_release_year: number = 0) {
      return new Uri(
        this.base +
          (pageNumber > 1
            ? '?page=' +
              pageNumber +
              (primary_release_year > 0 ? '&year=' + primary_release_year : '')
            : primary_release_year > 0
            ? '?year=' + primary_release_year
            : '')
      );
    }

    static detail(data: MovieBaseInterface) {
      return new Uri(`${this.base}/${data.id}/${slugify(data.title)}`);
    }

    static nowPlayingList(pageNumber: number = 1) {
      return new Uri(pageNumber > 1 ? '?page=' + pageNumber : '');
    }
  };
}

export default Paths;

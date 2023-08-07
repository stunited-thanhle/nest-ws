class UserService {
  hello() {
    console.log('hello');
  }
}

class UserRepository {
  get() {
    console.log('get');
  }
}

class Inject {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach((service) =>
      this._container.set(service, new service()),
    );
  }

  get(serviceKey: any) {
    const serviceInstance = this._container.get(serviceKey);
    if (!serviceInstance) {
      throw Error('No provider not found');
    }

    return serviceInstance;
  }
}

const inject = new Inject([UserService, UserRepository]);
const userService = inject.get(UserService);
userService.hello();
const repo = inject.get(UserRepository);
repo.get();

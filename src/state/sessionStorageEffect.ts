interface StateObj {
  setSelf: any;
  onSet: any;
}

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: StateObj) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: any) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export default localStorageEffect;

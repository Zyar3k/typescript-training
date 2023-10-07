interface IAuthor {
  id: number;
  name: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const test: IPostBetter<String> = {
  id: 1,
  title: "title",
  desc: "desc",
  extra: ["a", "b"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const test2: IPostEvenBetter<{ id: number; name: string }> = {
  id: 1,
  title: "title",
  desc: "desc",
  extra: [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ],
};

const test3: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "title",
  desc: "desc",
  extra: [
    { id: 1, title: "a" },
    { id: 2, title: "b" },
  ],
};
const test4: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "title",
  desc: "desc",
  extra: [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ],
};

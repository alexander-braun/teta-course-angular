const add = (a: number, b: number): number => {
  return a + b;
};

const joinStrings = (a: string, b: string): string => {
  return a + b;
};

const post: {
  title: string;
  daysOld: number;
  published: boolean;
} = {
  title: 'Latest Typescript News',
  daysOld: 10,
  published: true,
};

interface Post {
  title: string;
  daysOld: number;
  published: boolean;
}

const printPost = (postToPrint: Post) => {
  return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};

console.log(printPost(post));

const all_files = [
  {
    _id: '63ebfcaee659cfefc976caa6',
    file_url: 'http://localhost:8100/uploads/images/1676410030129-screen.webp',
    identifier: 'MRlyr',
    type: 'image',
    createdAt: '2023-02-14T18:18:10.162Z',
    updatedAt: '2023-02-14T18:27:10.162Z',
    __v: 0,
  },
  {
    _id: '63ebfdd2d9bc741f44176dc0',
    file_url: 'http://localhost:8100/uploads/images/1676410322519-screen.webp',
    identifier: 'QgRy9',
    type: 'image',
    createdAt: '2023-02-14T18:32:02.554Z',
    updatedAt: '2023-02-14T18:32:02.554Z',
    __v: 0,
  },
  {
    _id: '63ec42a4352c90ed053b851e',
    file_url: 'http://localhost:8200/uploads/images/1676427940937-v.PNG',
    identifier: '3Rerq',
    type: 'image',
    createdAt: '2023-02-14T18:25:40.973Z',
    updatedAt: '2023-02-14T18:25:40.973Z',
    __v: 0,
  },
  {
    _id: '63eccb2a0e0e5a3868973db0',
    file_url: 'http://localhost:6000/uploads/images/1676462890418-v.PNG',
    identifier: 'A95r1',
    type: 'image',
    createdAt: '2023-02-14T18:08:10.477Z',
    updatedAt: '2023-02-14T18:08:10.477Z',
    __v: 0,
  },
  {
    _id: '63eccbf98aaca47386e18348',
    file_url: 'http://localhost:6000/uploads/images/1676463097617-v.PNG',
    identifier: 'bawgd',
    type: 'image',
    createdAt: '2023-02-14T18:11:37.652Z',
    updatedAt: '2023-02-14T18:11:37.652Z',
    __v: 0,
  },
];

all_files.map((file) => {
  const createdAt_ms = new Date(file.createdAt).getTime();

  const expire_date = next_day(new Date(file.createdAt), 1).toISOString();

  const today_in_ms = new Date().getTime;

  const expire_date_ms = new Date(expire_date).getTime();

  const difference_in_ms = expire_date_ms - createdAt_ms;

  const difference_in_days = Math.floor(
    difference_in_ms / (24 * 60 * 60 * 1000)
  );

  if (difference_in_days >= 1) {
    console.log('difference_in_days', difference_in_days);
    // console.log('file', file);
  }
});

function next_day(createdAt_date, number_of_days) {
  const day_in_ms = 24 * 60 * 60 * 1000 * number_of_days;
  const createdAt_in_ms = createdAt_date.getTime();

  const nextDay_date = new Date(createdAt_in_ms + day_in_ms);

  const time_in_ms = createdAt_date.getTime() % day_in_ms;

  const nextDay = new Date(
    nextDay_date.getFullYear(),
    nextDay_date.getMonth(),
    nextDay_date.getDate(),
    0,
    0,
    0,
    time_in_ms
  );

  return nextDay;
}

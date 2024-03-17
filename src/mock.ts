import { NewsletterInfo, ReadStatus } from "./components/type";

export const scanMock: NewsletterInfo[] = [
  {
    domain: "meetup.com>",
    id: "1",
    userEmail: "user@meetup.com",
    lastReadDate: "20.10.2000",
    readEmails: 10,
    readStatus: ReadStatus.notInUse,
    restore: "true",
    totalEmails: 100,
    unsubscribe_link:
      "http://meet.meetup.com/ls/click?upn=85OQZrCWDpqSKgOweyjKlO-2B-2Bx79ZPDOcTZGHhUVE9-2FDzAq-2FqIxwUi7ESMNtstSdpPEBHuNMvvGZWXG9P42bzWg7z1qjyssuuX9oG-2BZaDewrcy277RoAYBfYCgiMljJQK2ibdfySh-2F0c5YautvpxpVyHYkcE0L1BGEeRppN2zSS7pGXb7rtrwBVOQKrQ4GQjwPh0nxS0T0q-2BPic9-2BwwJFxhVBSDGAdx-2BEN8HQlTivTrtQa8sGghYNomF7QiWgtpOyCYdJ_5MXR6iks8lNrzsgi5v9jKb24p-2FuegRqtZ4qWgYRGyLpgRmmpqtwI5KDcBrnk6pVb-2BA-2FoRk0n3yD-2FOh-2BeDnancx5EjYzY0m-2FYfFsLSOOMfCHbfv0V9KfuG4bRgQ5pVCJ8vq5Lv5RKUJ3xlAFuyzxCWGerC8rHVURoCthL2kbpGwNyhhUu-2BnHsN46kQGz1X00kwWOxeKg07ZIcNb0e8sGIkwCR7Z-2FIeFXK3O3skrGYtRv4xrMNEB2XLpx7gO2b3cMp1I6dgKehzqUsFquLSiAzJeLi8m7zCzHzYy7e7iiuZE1jSAuvuOKq8ibKRV-2BrsPKmUyLfrlX4U13okWgP68vkEAZ5uy0aMlrD99yHWTuY6IJvPe0StGvnMaB1Y6uNb3wl2AVObHVkj0m-2B6tpHucjNK9i-2BP00uUyxrnfp4EestfouwDusndaOWOsrwzVAZHokmFkcvaZsz-2BZzcCi2VTgjoz6P9f-2BsR6VYFoq2f8xs-2BTCtvCAwN3iEbR3L38MHKNWw11XYLBZfaH-2BVXnDvLRJgEbhFwpctUgwyacqK80-2BadO4q8gQNvFJpg26it7hV-2BTZqS6Keq4e2bLOHUdAZHgFrswNEYvmIrgJLZyif8TZ28JQ-2FP3J8VfUfppF-2F2cOIQtuSVcVHKSFermiOkJsS6hAW1l-2BsiMSMEAfD-2BbR4vxVpioU-2Fzs6-2Fd-2BoAD0f313SoniA5tE6FJgI8A1KV3Y2KIs7Q-2FzcZc5e4vHO-2B-2FBHa-2BMPzUXlg-3D",
    unsubscribe_status: 1,
  },
  {
    id: "2",
    userEmail: "user@meetup.com",
    domain: "meetup.com>",
    lastReadDate: "20.10.2000",
    readEmails: 10,
    readStatus: ReadStatus.Neglected,
    restore: "true",
    totalEmails: 100,
    unsubscribe_link:
      "http://meet.meetup.com/ls/click?upn=85OQZrCWDpqSKgOweyjKlO-2B-2Bx79ZPDOcTZGHhUVE9-2FDzAq-2FqIxwUi7ESMNtstSdpPEBHuNMvvGZWXG9P42bzWg7z1qjyssuuX9oG-2BZaDewrcy277RoAYBfYCgiMljJQK2ibdfySh-2F0c5YautvpxpVyHYkcE0L1BGEeRppN2zSS7pGXb7rtrwBVOQKrQ4GQjwPh0nxS0T0q-2BPic9-2BwwJFxhVBSDGAdx-2BEN8HQlTivTrtQa8sGghYNomF7QiWgtpOyCYdJ_5MXR6iks8lNrzsgi5v9jKb24p-2FuegRqtZ4qWgYRGyLpgRmmpqtwI5KDcBrnk6pVb-2BA-2FoRk0n3yD-2FOh-2BeDnancx5EjYzY0m-2FYfFsLSOOMfCHbfv0V9KfuG4bRgQ5pVCJ8vq5Lv5RKUJ3xlAFuyzxCWGerC8rHVURoCthL2kbpGwNyhhUu-2BnHsN46kQGz1X00kwWOxeKg07ZIcNb0e8sGIkwCR7Z-2FIeFXK3O3skrGYtRv4xrMNEB2XLpx7gO2b3cMp1I6dgKehzqUsFquLSiAzJeLi8m7zCzHzYy7e7iiuZE1jSAuvuOKq8ibKRV-2BrsPKmUyLfrlX4U13okWgP68vkEAZ5uy0aMlrD99yHWTuY6IJvPe0StGvnMaB1Y6uNb3wl2AVObHVkj0m-2B6tpHucjNK9i-2BP00uUyxrnfp4EestfouwDusndaOWOsrwzVAZHokmFkcvaZsz-2BZzcCi2VTgjoz6P9f-2BsR6VYFoq2f8xs-2BTCtvCAwN3iEbR3L38MHKNWw11XYLBZfaH-2BVXnDvLRJgEbhFwpctUgwyacqK80-2BadO4q8gQNvFJpg26it7hV-2BTZqS6Keq4e2bLOHUdAZHgFrswNEYvmIrgJLZyif8TZ28JQ-2FP3J8VfUfppF-2F2cOIQtuSVcVHKSFermiOkJsS6hAW1l-2BsiMSMEAfD-2BbR4vxVpioU-2Fzs6-2Fd-2BoAD0f313SoniA5tE6FJgI8A1KV3Y2KIs7Q-2FzcZc5e4vHO-2B-2FBHa-2BMPzUXlg-3D",
    unsubscribe_status: 1,
  },
  {
    id: "3",
    userEmail: "user@meetup.com",
    domain: "meetup.com>",
    lastReadDate: "20.10.2000",
    readEmails: 10,
    readStatus: ReadStatus.notInUse,
    restore: "true",
    totalEmails: 100,
    unsubscribe_link:
      "http://meet.meetup.com/ls/click?upn=85OQZrCWDpqSKgOweyjKlO-2B-2Bx79ZPDOcTZGHhUVE9-2FDzAq-2FqIxwUi7ESMNtstSdpPEBHuNMvvGZWXG9P42bzWg7z1qjyssuuX9oG-2BZaDewrcy277RoAYBfYCgiMljJQK2ibdfySh-2F0c5YautvpxpVyHYkcE0L1BGEeRppN2zSS7pGXb7rtrwBVOQKrQ4GQjwPh0nxS0T0q-2BPic9-2BwwJFxhVBSDGAdx-2BEN8HQlTivTrtQa8sGghYNomF7QiWgtpOyCYdJ_5MXR6iks8lNrzsgi5v9jKb24p-2FuegRqtZ4qWgYRGyLpgRmmpqtwI5KDcBrnk6pVb-2BA-2FoRk0n3yD-2FOh-2BeDnancx5EjYzY0m-2FYfFsLSOOMfCHbfv0V9KfuG4bRgQ5pVCJ8vq5Lv5RKUJ3xlAFuyzxCWGerC8rHVURoCthL2kbpGwNyhhUu-2BnHsN46kQGz1X00kwWOxeKg07ZIcNb0e8sGIkwCR7Z-2FIeFXK3O3skrGYtRv4xrMNEB2XLpx7gO2b3cMp1I6dgKehzqUsFquLSiAzJeLi8m7zCzHzYy7e7iiuZE1jSAuvuOKq8ibKRV-2BrsPKmUyLfrlX4U13okWgP68vkEAZ5uy0aMlrD99yHWTuY6IJvPe0StGvnMaB1Y6uNb3wl2AVObHVkj0m-2B6tpHucjNK9i-2BP00uUyxrnfp4EestfouwDusndaOWOsrwzVAZHokmFkcvaZsz-2BZzcCi2VTgjoz6P9f-2BsR6VYFoq2f8xs-2BTCtvCAwN3iEbR3L38MHKNWw11XYLBZfaH-2BVXnDvLRJgEbhFwpctUgwyacqK80-2BadO4q8gQNvFJpg26it7hV-2BTZqS6Keq4e2bLOHUdAZHgFrswNEYvmIrgJLZyif8TZ28JQ-2FP3J8VfUfppF-2F2cOIQtuSVcVHKSFermiOkJsS6hAW1l-2BsiMSMEAfD-2BbR4vxVpioU-2Fzs6-2Fd-2BoAD0f313SoniA5tE6FJgI8A1KV3Y2KIs7Q-2FzcZc5e4vHO-2B-2FBHa-2BMPzUXlg-3D",
    unsubscribe_status: 1,
  },
  {
    id: "4",
    userEmail: "user@meetup.com",
    domain: "meetup.com>",
    lastReadDate: "20.10.2000",
    readEmails: 10,
    readStatus: ReadStatus.Neglected,
    restore: "true",
    totalEmails: 100,
    unsubscribe_link:
      "http://meet.meetup.com/ls/click?upn=85OQZrCWDpqSKgOweyjKlO-2B-2Bx79ZPDOcTZGHhUVE9-2FDzAq-2FqIxwUi7ESMNtstSdpPEBHuNMvvGZWXG9P42bzWg7z1qjyssuuX9oG-2BZaDewrcy277RoAYBfYCgiMljJQK2ibdfySh-2F0c5YautvpxpVyHYkcE0L1BGEeRppN2zSS7pGXb7rtrwBVOQKrQ4GQjwPh0nxS0T0q-2BPic9-2BwwJFxhVBSDGAdx-2BEN8HQlTivTrtQa8sGghYNomF7QiWgtpOyCYdJ_5MXR6iks8lNrzsgi5v9jKb24p-2FuegRqtZ4qWgYRGyLpgRmmpqtwI5KDcBrnk6pVb-2BA-2FoRk0n3yD-2FOh-2BeDnancx5EjYzY0m-2FYfFsLSOOMfCHbfv0V9KfuG4bRgQ5pVCJ8vq5Lv5RKUJ3xlAFuyzxCWGerC8rHVURoCthL2kbpGwNyhhUu-2BnHsN46kQGz1X00kwWOxeKg07ZIcNb0e8sGIkwCR7Z-2FIeFXK3O3skrGYtRv4xrMNEB2XLpx7gO2b3cMp1I6dgKehzqUsFquLSiAzJeLi8m7zCzHzYy7e7iiuZE1jSAuvuOKq8ibKRV-2BrsPKmUyLfrlX4U13okWgP68vkEAZ5uy0aMlrD99yHWTuY6IJvPe0StGvnMaB1Y6uNb3wl2AVObHVkj0m-2B6tpHucjNK9i-2BP00uUyxrnfp4EestfouwDusndaOWOsrwzVAZHokmFkcvaZsz-2BZzcCi2VTgjoz6P9f-2BsR6VYFoq2f8xs-2BTCtvCAwN3iEbR3L38MHKNWw11XYLBZfaH-2BVXnDvLRJgEbhFwpctUgwyacqK80-2BadO4q8gQNvFJpg26it7hV-2BTZqS6Keq4e2bLOHUdAZHgFrswNEYvmIrgJLZyif8TZ28JQ-2FP3J8VfUfppF-2F2cOIQtuSVcVHKSFermiOkJsS6hAW1l-2BsiMSMEAfD-2BbR4vxVpioU-2Fzs6-2Fd-2BoAD0f313SoniA5tE6FJgI8A1KV3Y2KIs7Q-2FzcZc5e4vHO-2B-2FBHa-2BMPzUXlg-3D",
    unsubscribe_status: 1,
  },
];

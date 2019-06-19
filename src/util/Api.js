import axios from 'axios';

export const get = async (url) => {
  return axios.get(url, {
    headers: {
      'CAI-Data-Platform-Key':  '80f92e524b05ef4e39456afd8e9822c0918d72ef45ca49202b3b1aba01aede7b',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJraWQiOiJFWW83WjRFUXJYSE5zSlNYLWxWWm1Bd2gtZnFqNm56Y1JoS1FkVjhidFBRIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULl9aVWE1c1dmYmNNczNZdjY3TXVaaXp0X21LUUpjMTQ4anVhY1lfVlM2dnMiLCJpc3MiOiJodHRwczovL2F0Zy5va3RhcHJldmlldy5jb20vb2F1dGgyL2F1c2gxeG5oZGhCY2s1bVMyMGg3IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTU2MDkxMjI4NiwiZXhwIjoxNTYwOTk4Njg2LCJjaWQiOiIwb2FnbW1ndTVpNmRseHhnYTBoNyIsInVpZCI6IjAwdWdtbzBlM2VOVjFvRlFmMGg3Iiwic2NwIjpbInBob25lIiwiZ3JvdXBzIiwib3BlbmlkIiwiZW1haWwiLCJhZGRyZXNzIiwicHJvZmlsZSJdLCJzdWIiOiJOdXJ1ZGRpbi5OYXNpcnVkZGluQGNveGF1dG9pbmMuY29tIn0.llycYFWv6BexRuzTKIbYY6Xcz4LTUbV_WCep1_1ktcWLM5SV5tSdAMmYyRc15g-Cvai_cJ5yc3s-UdIBdlQvoBvG7O2_BK06ym8WUj7sl03vP_Ee2Tw9ClrpZw7jNTHixCaNmMklAycoHNY2if1p68crYV5XtOHfIZhpog5IVzQXIN2qa8-MnpFEFp14nU1i1ikPgp6dIjZh69694vqesr1vQBywNnt4K1qq1lHBbkznWJ11A9dzU5dtZv-YHaHFa6f8oZ2Lv2n1kRUUMfKOZH_Kcc_3u4Rj5VqVbe1IepDfhzD23Hudky3vvecbM82MMJ1320SIK_Hj7ch6esItPQ`,
      'X-Api-User-Id': '00ugmo0e3eNV1oFQf0h7',
    }
  })
    .then(response => response.data)
    .catch(err => console.log(err))
};
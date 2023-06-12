/*
 * @Author: peerless_hero peerless_hero@outlook.com
 * @Date: 2023-06-12 11:15:01
 * @LastEditors: peerless_hero peerless_hero@outlook.com
 * @LastEditTime: 2023-06-12 12:00:20
 * @FilePath: \auto-import-error-demo\src\openapi\system\user\list\index.ts
 * @Description:
 *
 */
/*
 *                                                     __----~~~~~~~~~~~------___
 *                                    .  .   ~~//====......          __--~ ~~
 *                    -.            \_|//     |||\\  ~~~~~~::::... /~
 *                 ___-==_       _-~o~  \/    |||  \\            _/~~-
 *         __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
 *     _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
 *   .~       .~       |   \\ -_    /  /-   /   ||      \   /
 *  /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
 *  |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
 *           '         ~-|      /|    |-~\~~       __--~~
 *                       |-~~-_/ |    |   ~\_   _-~            /\
 *                            /  \     \__   \/~                \__
 *                        _--~ _/ | .-~~____--~-/                  ~~==.
 *                       ((->/~   '.|||' -_|    ~~-/ ,              . _||
 *                                  -_     ~\      ~~---l__i__i__i--~~_/
 *                                  _-~-__   ~)  \--______________--~~
 *                                //.-~~~-~_--~- |-------~~~~~~~~
 *                                       //.-~~~--\
 *                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *                               神兽保佑            永无BUG
 */

const url = '/system/user/list'

/**
 * 系统管理/用户管理
 *
 * 查询用户
 *
 */
export async function getSystemUserList(
  params?: SystemUserListQueryget,
): Promise<Page<User>> {
  const res = await useRequest({
    url,
    method: 'get',
    params,
  })
  return res.data
}

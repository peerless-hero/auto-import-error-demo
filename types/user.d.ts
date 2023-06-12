declare interface User {
  admin?: boolean
  /**
   * 用户头像
   *
   */
  avatar?: string
  /**
   * 创建者
   *
   */
  createBy?: string
  /**
   * 创建时间
   *
   */
  createTime: string
  dept?: Dept
  /**
   * 部门ID
   *
   */
  deptId?: number
  /**
   * 用户邮箱
   *
   */
  email: string
  /**
   * 最后登录时间
   *
   */
  loginDate: string
  /**
   * 最后登录IP
   *
   */
  loginIp: string
  /**
   * 用户昵称
   *
   */
  nickName: string
  /**
   * 请求参数
   *
   */
  params?: any
  /**
   * 密码
   *
   */
  password: string
  /**
   * 手机号码
   *
   */
  phonenumber: string
  /**
   * 岗位组
   *
   */
  postIds?: number[]
  /**
   * 备注
   *
   */
  remark?: string
  /**
   * 角色ID
   *
   */
  roleId?: number
  /**
   * 角色组
   *
   */
  roleIds?: number[]
  /**
   * 角色对象
   *
   */
  roles: Role[]
  /**
   * 搜索值
   *
   */
  searchValue?: string
  sex: Sex
  status?: Status
  /**
   * 更新者
   *
   */
  updateBy?: string
  /**
   * 更新时间
   *
   */
  updateTime?: string
  /**
   * 用户ID
   *
   */
  userId: number
  /**
   * 用户账号
   *
   */
  userName: string
}

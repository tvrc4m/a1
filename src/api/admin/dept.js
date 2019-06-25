import req from '@/utils/request'

// 获取部门列表
export function allDepts(params){
    return req.get(`/admin/dept/all`,params)
}
// 获取部门列表
export function getDepts(params){
    return req.get(`/admin/dept`,params)
}

// 获取部门详情
export function getDept(dept_id){
    return req.get(`/admin/dept/${dept_id}`)
}

// 添加新部门
export function addDept(data){
    return req.post("/admin/dept",data)
}

// 编辑部门信息
export function editDept(dept_id, data){
    return req.put(`/admin/dept/${dept_id}`,data)
}


// 删除部门
export function delDept(dept_id){
    return req.delete(`/admin/dept/${dept_id}`)
}
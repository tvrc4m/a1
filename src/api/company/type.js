import req from '@/utils/request'

export function getAllTypes(){
    return req.get(`/admin/company/types`)
}

export function getTypes(){
    return req.get(`/admin/company/type`)
}
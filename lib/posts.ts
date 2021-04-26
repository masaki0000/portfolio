import {worksList} from '../components/works'


export function getPostIds () {
  return worksList.map(worksItem => {
    return {
      params: {
        id: worksItem.id
      }
    }
  })
}

export function getWorksItem (id: string) {

  let postData = null;
  worksList.map(worksItem => {
    if (worksItem.id === id) {
      postData = worksItem
    }
  })

  return {
    postData
  }
}
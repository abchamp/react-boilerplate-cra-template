import React, { useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';

import { PageWrapper } from 'app/components/PageWrapper';
import { Table } from 'antd';

export function UsersPage() {
  // let dataSource: any = []
  const [data, setData] = useState([]);

  let columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    }
  ]

  const loadingData = async () => {
    // call action and do saga

    // let _data: any = await requestWithAuth("/users",RequestMethodKey.get)
    // for(let i=0;i<_data.data.length;i++){
    //   _data.data[i]['key'] = i+1;
    // }
    // setData(_data.data);
  }

  useEffect(() => {
    loadingData()
    console.log('load data success')
  }, [])

  
  return (
    <>
      <Helmet>
        <title>User Page</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>
      <PageWrapper>
        <h1> User Page</h1>
        <Table dataSource={data} columns={columns} />
      </PageWrapper>
    </>
  );
}

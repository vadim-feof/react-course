import React, {useMemo, useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import MySelect from "../UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput placeholder="Поиск по названию..."
                     value={filter.searchQuery}
                     onChange={e => setFilter({...filter, searchQuery: e.target.value})}
            />
            <MySelect
                defaultValue={"Сортировка"}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
                value={filter.sortBy}
                onChange={value => setFilter({...filter, sortBy: value})}
            />
        </div>
    );
};

export default PostFilter;
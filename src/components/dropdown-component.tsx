import React, { useState } from 'react'
import logo from '../assets/user-solid-circle.svg';
import { Link } from 'react-router-dom';

interface Okrs {
    id: string
    title: string
    category: string
    shortDescr: string
    userName: string
    comments: string[]
  }

export default function DropDownComponent(props: { data: Okrs }) {
  return (
    <>
      <div className="parent row">
          <Link  to={"/blog/"+ props.data.id} className="header">{props.data.title}</Link>
          <div className="body">{props.data.shortDescr}</div>
          <div className="footer">
              <div className="user-detail">
                <img src="https://img.icons8.com/ios/50/000000/user--v1.png"/>
                <span>{props.data.userName}</span>
              </div>
              <div className="comments-detail">
                <img src="https://img.icons8.com/ios/50/000000/comments.png"/>
                <span>{props.data.comments.length}</span>
              </div>
          </div>
      </div>
    </>
  )
}

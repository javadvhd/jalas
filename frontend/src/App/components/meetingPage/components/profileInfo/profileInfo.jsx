// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
// helpers
import { convertToPersianFormat } from '../../../../../helpers/date'

const ProfileInfo = ({
  createdAt,
  fromAdmin,
  firstname,
  lastname,
  profileImage,
  isPrivate,
  style,
}) => (
  <div
    style={{
      marginBottom: 5,
      display: 'flex',
      flexDirection: fromAdmin ? 'row' : 'row-reverse',
      alignItems: 'center',
      ...style,
    }}
  >
    <span
      style={{
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        background: '#BC7DDE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {profileImage ? (
        <img
          alt="userImage"
          src={profileImage}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <img src="user.svg" alt="user" />
      )}
    </span>
    <span
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '0 8px',
      }}
    >
      <Typography
        className="iranyekan"
        style={{
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '-0.1px',
          fontWeight: 'bold',
          textAlign: fromAdmin ? 'left' : 'right',
          borderRadius: '11px',
        }}
      >
        {firstname && lastname ? `${firstname} ${lastname}` : 'در حال دریافت'}
      </Typography>
      <Typography
        color="textSecondary"
        className="iranyekan"
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          lineHeight: '17px',
          textAlign: fromAdmin ? 'left' : 'right',
          letterSpacing: '-0.07px',
        }}
      >
        {`${convertToPersianFormat(new Date(createdAt))}${
          isPrivate ? ' - خصوصی' : ''
        }`}
      </Typography>
    </span>
  </div>
)

export default ProfileInfo

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';


import './directory.style.scss';
// since we need the menu items here, we need state.
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => ( // same as : imageUrl, id, size, linkUrl
        <MenuItem key={id} {...otherSectionProps} />  // same as: title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}
      ))}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
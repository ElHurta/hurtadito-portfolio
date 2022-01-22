import React from 'react';

import { FaDesktop } from "@react-icons/all-files/fa/FaDesktop"
import { MdVideocam } from "@react-icons/all-files/md/MdVideocam"
import { RiPencilFill } from "@react-icons/all-files/ri/RiPencilFill"
import { FaDatabase } from "@react-icons/all-files/fa/FaDatabase"


function PositionIcon(props) {
  if (props.icon_flag === "front_dev"){
      return <FaDesktop className='web-icon'/>
  }

  if (props.icon_flag === "back_dev"){
      return <FaDatabase className='web-icon'/>
  }

  if (props.icon_flag === "video_edition"){
      return <MdVideocam className='web-icon'/>
  }

  if (props.icon_flag === "writing"){
      return <RiPencilFill className='web-icon'/>
  }
}

export {PositionIcon};

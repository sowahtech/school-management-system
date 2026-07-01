import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  AnnouncementContainer,
  Content,
  Title,
  AnnouncementForm,
  FormGroup,
  Label,
  TextArea,
  Button,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementContent,
} from "../../styles/AnnouncementStyles";

const Announcement = () => {

  const [announcement, setAnnouncement] = useState([])
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    fetchAnnouncements();
  }, [])

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/vt/announcement/getall")
      setAnnouncements(response.data.announcements)
    } catch (error) {
      console.error('Error fetching announcements', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/vt/announcement/create', {
        announcement: announcement
      })
      console.log('Announcement sent: ', response.data) // this will log the response data
      setAnnouncement('')
      fetchAnnouncements()
    } catch (error) {
      console.error('Error sending announcement: ', error)
    }
  }

  return (
    <AnnouncementContainer>
      <Sidebar />
      <Content>
        <Title>Announcement</Title>
        <AnnouncementForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="announcement">Announcement: </Label>
            <TextArea id="announcement" value={announcement} onChange={(e) => setAnnouncement(e.target.announcement)} required rows={4} cols={50} />
          </FormGroup>
          <Button type="submit">Send Announcement</Button>
        </AnnouncementForm>
        {/* To display announcements */}
        <h2>Announcement</h2>
        <AnnouncementList>
          {announcements.map((announcement) => {
            <AnnouncementItem key={announcement}>
              <AnnouncementContent>{announcement.announcement}</AnnouncementContent>
            </AnnouncementItem>
          })}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default Announcement;

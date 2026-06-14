import {useState, useEffect} from 'react'
import Sidebar from "./Sidebar";
import EventCalendar from "./EventCalendar";
import Announcement from "./Announcement";
import Performance from "./Performance";
import axios from "axios";
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardContent,
  CardTitle,
} from "../../styles/DashboardStyles";
const AdminDashboard = () => {

  const [isOpen, setIsOPen] = useState(true);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    // fetchStudentPerformance();
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/vt/events/getall")
      setEvents(response.data.events || [])
    } catch (error) {
      console.error('Error fetching events', error)
    }
  }

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/vt/announcement/getall")
      setAnnouncements(response.data.announcements || [])
    } catch (error) {
      console.error('Error fetching announcements', error)
    }
  }

  // const fetchStudentPerformance = () => {
  //   try {
  //     const response = await axios.get("http://localhost:4000/api/vt/performance/getall")
  //     setStudentPerformance(response.data.performance || [])
  //   } catch (error) {
  //     console.error('Error fetching performance', error)
  //   }
  // }

  return (
    <AdminDashboardContainer>
      <Sidebar />
      <Content>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>500</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>50</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Classes</CardTitle>
                <CardContent>20</CardContent>
              </Card>
            </CardContainer>
          </Section>

          <Section>
            <SectionTitle>All Events</SectionTitle>
          </Section>
        </TopContent>

        <BottomContent>
          <Performance />
          <Announcement />
        </BottomContent>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;

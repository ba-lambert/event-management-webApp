import PageHeader from "../../common/PageHeader.tsx";

const EventDetails = () => {
    return (
        <div className="relative flex flex-col w-full min-h-screen">
            <PageHeader title="Event title" image="https://images.91wheels.com/assets/b_images/main/models/profile/profile1661771557.jpg" description="range rover new car" />
            <section className="flex-grow flex w-full mt-72">
                <div className="w-1/2 h-full"></div>
                <div className="w-1/2 h-full">
                    <h3>Addis Ababa, Ethiopia November 28 - 2 December 2022</h3>
                    <h3>Addis Ababa, Ethiopia November 28 - 2 December 2022</h3>
                    <p>The event took place in Addis Ababa, Ethiopia with the support of UNECA and UNDESA. The themes were based on Global Digital Compact, elaborated in the UN Secretary-General’s report on Our Common Agenda.
                        The event was fully hybrid with participants online using a dedicated mobile application to ensure inclusiveness for participation from anywhere in the world. The hybrid format was also applied to social and networking events and the IGF Village which had a dozen organizations exhibiting their products and services.

                        Rwanda Events fully produced the event.
                    </p>
                </div>
            </section>
        </div>
    )
}
export default EventDetails;

import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router';

interface TicektListItemProps {
  id: number;
  title: string;
  soldTicket: number;
  usedTicket: number;
  registDate: string;
  status: string;
}

const TicketListItemComp = (props: { data: TicektListItemProps }) => {
  const navigate = useNavigate();

  const handleRouter = (url: string): void => {
    navigate(url);
  };

  return (
    <>
      <Wrapper option="Row">
        <Wrapper option="TicketListItem">
          <Wrapper>
            <Wrapper option="WordWrap">
              <Text size="body3" $fontWeight="bold">
                {props.data.title}
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper option="TicketListItem">
          <Text size="body4">{props.data.soldTicket}</Text>
        </Wrapper>
        <Wrapper option="TicketListItem">
          <Text size="body4">{props.data.usedTicket}</Text>
        </Wrapper>
        <Wrapper option="TicketListItem">
          <Text size="body4">{props.data.registDate}</Text>
        </Wrapper>
        <Wrapper option="TicketListItem">
          <Text size="body4">{props.data.status}</Text>
        </Wrapper>
        <Wrapper option="TicketListItem">
          <Button
            option="textButton"
            size="iconSize"
            onClick={() => {
              handleRouter(`ticket/${props.data.id}`);
            }}
          >
            <BsThreeDotsVertical size={20} />
          </Button>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default TicketListItemComp;

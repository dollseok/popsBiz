import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router';

interface PopupListItemProps {
  id: number;
  image: string;
  title: string;
  address: string;
  startday: string;
  endday: string;
  category: string;
  soldTicket: number;
  totalTicket: number;
  registDate: string;
  status: string;
}

const PopupListItemComp = (props: { data: PopupListItemProps }) => {
  const navigate = useNavigate();

  const handleRouter = (url: string): void => {
    navigate(url);
  };

  return (
    <>
      <Wrapper option="Row">
        <Wrapper option="PopupListItem">
          <Image src="" width={80} height={80} $margin="10px" />
          <Wrapper>
            <Wrapper $height="38px" $marginBottom="15px" option="WordWrap">
              <Text size="body3" $fontWeight="bold">
                {props.data.title}
              </Text>
            </Wrapper>
            <Text size="body6" $color="grey1">
              {props.data.address}
            </Text>
            <Text size="body6" $color="grey1">
              {props.data.startday} - {props.data.endday}
            </Text>
          </Wrapper>
        </Wrapper>
        <Wrapper option="PopupListItem">
          <Text size="body4">{props.data.category}</Text>
        </Wrapper>
        <Wrapper option="PopupListItem">
          <Text size="body4">
            {props.data.soldTicket}/{props.data.totalTicket}
          </Text>
        </Wrapper>
        <Wrapper option="PopupListItem">
          <Text size="body4">{props.data.registDate}</Text>
        </Wrapper>
        <Wrapper option="PopupListItem">
          <Text size="body4">{props.data.status}</Text>
        </Wrapper>
        <Wrapper option="PopupListItem">
          <Button
            option="textButton"
            size="iconSize"
            onClick={() => {
              handleRouter(`detail/${props.data.id}`);
            }}
          >
            <BsThreeDotsVertical size={20} />
          </Button>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default PopupListItemComp;

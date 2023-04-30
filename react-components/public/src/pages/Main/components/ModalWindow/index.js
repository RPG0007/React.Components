import React from 'react';
import './index.scss';
import Loader from '../../../../components/Loader';
import { useActions } from '../../../../hooks/useAction';
import { useGetCardQuery } from '../../../../store/api/cards.api';
import { useCardId } from '../../../../hooks/useCardId';
const ModalWindow = () => {
    const cardId = useCardId();
    const { isLoading, data: card } = useGetCardQuery(cardId);
    const { changeCardId } = useActions();
    const close = () => {
        changeCardId(null);
    };
    if (isLoading)
        return (React.createElement("div", { onClick: (e) => e.currentTarget === e.target && close(), className: 'modal' },
            React.createElement("div", { className: 'modal__wrapper' },
                React.createElement(Loader, null))));
    else if (card) {
        const data = card[0];
        return (React.createElement("div", { onClick: (e) => e.currentTarget === e.target && close(), className: 'modal' },
            React.createElement("div", { className: 'modal__wrapper' },
                React.createElement("div", { onClick: close, className: "modal__close" }),
                React.createElement("div", { className: "modal__card card" },
                    React.createElement("div", { className: "card__header" },
                        React.createElement("img", { src: data?.image, alt: data?.name, className: "card__img", width: '180px', height: '180px' }),
                        React.createElement("div", null,
                            React.createElement("div", { className: "card__title" }, data?.name),
                            React.createElement("div", { className: "card__description" },
                                React.createElement("span", { className: "card__span" }, "Description:"),
                                " ",
                                data?.description))),
                    React.createElement("div", { className: "card__ingredient" },
                        React.createElement("span", { className: "card__span" }, "Ingredient:"),
                        " ",
                        data?.ingredient),
                    React.createElement("div", { className: "card__cost" },
                        React.createElement("span", { className: "card__span" }, "Ingredient cost:"),
                        " ",
                        data?.cost,
                        " galleons"),
                    React.createElement("div", { className: "card__prerequisite" },
                        React.createElement("span", { className: "card__span" }, "Prerequisite:"),
                        " ",
                        data?.prerequisite)))));
    }
    return React.createElement(React.Fragment, null);
};
export default ModalWindow;

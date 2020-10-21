// @flow

import React from 'react';

import { translate } from '../../../base/i18n';
import { connect } from '../../../base/redux';
import AbstractChat, {
    _mapDispatchToProps,
    _mapStateToProps,
    type Props
} from '../AbstractChat';


import MessageContainer from './MessageContainer';


/**
 * Implements a React native component that renders the chat window of
 * the mobile client.
 */
class ChatOverlay extends AbstractChat<Props> {
    /**
     * Creates a new instance.
     *
     * @inheritdoc
     */
    constructor(props: Props) {
        super(props);

        this._onClose = this._onClose.bind(this);
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     */
    render() {
        return (
            <MessageContainer messages = { this.props._messages } />
        );
    }

    _onClose: () => boolean

    /**
     * Closes the modal.
     *
     * @returns {boolean}
     */
    _onClose() {
        this.props._onToggleChat();

        return true;
    }
}

export default translate(connect(_mapStateToProps, _mapDispatchToProps)(ChatOverlay));

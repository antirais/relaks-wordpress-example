import React, { PureComponent } from 'react';

class Breadcrumb extends PureComponent {
    static displayName = 'Breadcrumb';

    render() {
        let { trail } = this.props;
        let children = []
        let key = 0;
        for (let item of trail) {
            children.push(<a key={key++} href={item.url}>{item.label}</a>);
            children.push(' > ');
        }
        children.pop();
        return <h4 className="breadcrumb">{children}</h4>;
    }
}

if (process.env.NODE_ENV !== 'production') {
    const PropTypes = require('prop-types');

    Breadcrumb.propTypes = {
        trail: PropTypes.arrayOf(PropTypes.object),
    };
}

export {
    Breadcrumb as default,
    Breadcrumb,
};

import React from 'react';
import { data } from './phoneData';


class PhoneCode extends React.Component {
    constructor(props) {
        super(props);
        this.renderOptions = this.renderOptions.bind(this);
    }

    componentDidMount() {
        const { showFirst } = this.props;
        if (showFirst && Array.isArray(showFirst) && showFirst.length && data[showFirst[0]]) {
            this.props.onSelect(data[showFirst[0]].code);
        }
    }

    renderOptions() {
        const options = [];
        const map = {};
        const { showFirst } = this.props;
        if (showFirst && Array.isArray(showFirst)) {
            showFirst.forEach(c => {
                map[c] = true;
                if (data[c]) {
                    options.push(
                        <option key={c} value={data[c].code}
                            className={this.props.optionClassName}
                        >{data[c].name}
                        </option>
                    );
                }
            });
        } else {
            options.push(
                <option key='--' value="" className={this.props.optionClassName}>{this.props.defaultValue || ''}</option>
            );
        }
        Object.keys(data).forEach(c => {
            if (!map[c]) {
                options.push(
                    <option key={c} value={data[c].code}
                        className={this.props.optionClassName}
                    >{data[c].name}
                    </option>
                );
            }
        });
        return options;
    }

    render() {
        return (
            <select
                name={this.props.name}
                id={this.props.id}
                className={this.props.className}
                onChange={(e) => this.props.onSelect(e.target.value)}
            >{this.renderOptions()}
            </select>
        );
    }
}

export default PhoneCode;

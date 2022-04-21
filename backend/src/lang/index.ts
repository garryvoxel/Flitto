export default {
    "KO": {
        "language": [
            '한국어', '영어', '일본어', '중국어(간체)',
            '중국어(번체)', '인도네시아어', '베트남어',
            '태국어', '스페인어'
        ],
        "email": {
            requestor_a01: '[플리토] 번역이 완료되었습니다.',
            client_a01: '[플리토] 번역요청이 등록되었습니다.',
            client_a02: '[플리토] 번역이 완료되었습니다.',
            tc_a01: '[플리토] TC작업요청이 등록되었습니다.',
            tc_a02: '[플리토] TC작업 마감시간이 2시간 남았습니다.',
            tc_a03: '[플리토] TC작업 마감시간이 초과되었습니다.',
            tc_a04: '[플리토] TC작업이 할당되었습니다.',
            translator_a01: '[플리토] 번역요청이 등록되었습니다.',
            translator_a02: '[플리토] 번역 마감시간이 2시간 남았습니다.',
            translator_a03: '[플리토] 번역 마감시간이 초과되었습니다.',
            translator_a04: '[플리토] 번역이 할당되었습니다.',
            reviewer_a01: '[플리토] 검수요청이 등록되었습니다.',
            reviewer_a02: '[플리토] 검수 마감시간이 2시간 남았습니다.',
            reviewer_a03: '[플리토] 검수 마감시간이 초과되었습니다.',
            reviewer_a04: '[플리토] 검수가 할당되었습니다.',
            admin_a01: '[플리토] 번역 요청이 등록되었습니다.',
            admin_a02: '[플리토] 미수락 상태인 TC작업이 있습니다.',
            admin_a03: '[플리토] 마감시간을 초과한 TC작업이 있습니다.',
            admin_a04: '[플리토] 미수락 상태인 번역이 있습니다.',
            admin_a05: '[플리토] 마감시간을 초과한 번역이 있습니다.',
            admin_a06: '[플리토] 미수락 상태인 검수가 있습니다.',
            admin_a07: '[플리토] 마감시간을 초과한 검수가 있습니다.',
            admin_a08: '[플리토] 완료예정일시까지 2시간 남은 요청이 있습니다.',
            admin_a09: '[플리토] 완료예정일시까지 완료되지못한 요청이 있습니다.',
            admin_a10: '[플리토] 요청에 대한 전체 작업이 완료되었습니다.',
//
            requestor_a04: '[플리토] 번역 플랫폼에 가입되었습니다.',
            client_a05: '[플리토] 번역 플랫폼에 가입되었습니다.',
            tc_a07: '[플리토] 번역 플랫폼에 가입되었습니다.',
            translator_a07: '[플리토] 번역 플랫폼에 가입되었습니다.',
            reviewer_a07: '[플리토] 번역 플랫폼에 가입되었습니다.',
            admin_a14: '[플리토] 번역 플랫폼에 가입되었습니다.',
//
            requestor_a02: '[플리토] 게시글에 답글이 등록되었습니다.',
            requestor_a03: '[플리토] 게시글에 댓글이 등록되었습니다.',
            client_a03: '[플리토] 게시글에 답글이 등록되었습니다.',
            client_a04: '[플리토] 게시글에 댓글이 등록되었습니다.',
            tc_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            tc_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            translator_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            translator_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            reviewer_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            reviewer_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            admin_a11: '[플리토] 새로운 게시글이 등록되었습니다.',
            admin_a12: '[플리토] 게시글에 답글이 등록되었습니다.',
            admin_a13: '[플리토] 게시글에 댓글이 등록되었습니다.'
        },
        "web_push": {
            //작업완료
            requestor_a01: '"{title}"의 {lang} 번역이 완료되었습니다.',
            //작업요청
            client_a01: '"{title}"의 {lang} 번역이 요청되었습니다.',
            //
            client_a02: '"{title}"의 {lang} 번역이 완료되었습니다.',
            //
            tc_a01: '"{title}"의 {org_lang} TC작업요청이 등록되었습니다. 확인 후 먼저 수락해주세요.',
            tc_a02: '"{title}"의 {org_lang} TC작업 마감시간이 2시간 남았습니다.',
            tc_a03: '"{title}"의 {org_lang} TC작업 마감시간이 초과되었습니다.',
            tc_a04: '"{title}"의 {org_lang} TC작업이 할당되었습니다. TC작업을 진행해주세요.',
            //
            translator_a01: '"{title}"의 {org_lang}->{dst_lang} 번역요청이 등록되었습니다. 확인 후 먼저 수락해주세요.',
            translator_a02: '"{title}"의 {org_lang}->{dst_lang} 번역 마감시간이 2시간 남았습니다.',
            translator_a03: '"{title}"의 {org_lang}->{dst_lang} 번역 마감시간이 초과되었습니다.',
            translator_a04: '"{title}"의 {org_lang}->{dst_lang} 번역이 할당되었습니다. 번역을 진행해주세요',
            //
            reviewer_a01: '"{title}"의 {dst_lang} 검수요청이 등록되었습니다. 확인 후 먼저 수락해주세요.',
            reviewer_a02: '"{title}"의 {dst_lang} 검수 마감시간이 2시간 남았습니다.',
            reviewer_a03: '"{title}"의 {dst_lang} 검수 마감시간이 초과되었습니다.',
            reviewer_a04: '"{title}"의 {dst_lang} 검수가 할당되었습니다. 검수를 진행해주세요.',
            //
            admin_a01: '"{title}"의 {lang} 번역이 요청되었습니다.',
            admin_a02: '"{title}"의 {org_lang} TC작업 요청 후 2시간이 지났지만, 아직 수락되지 않았습니다.',
            admin_a03: '"{title}"의 {org_lang} TC작업 마감시간이 지났지만, TC작업자가 TC작업을 완료하지 않았습니다.',
            admin_a04: '"{title}"의 {org_lang}->{dst_lang} 번역 요청 후 2시간이 지났지만, 아직 수락되지 않았습니다.',
            admin_a05: '"{title}"의 {org_lang}->{dst_lang} 번역작업 마감시간이 지났지만, 번역가가 번역을 완료하지 않았습니다.',
            admin_a06: '"{title}"의 {dst_lang} 검수 요청 후 2시간이 지났지만, 아직 수락되지 않았습니다.',
            admin_a07: '"{title}"의 {dst_lang} 검수 마감시간이 지났지만, 검수자가 검수를 완료하지 않았습니다.',
            admin_a08: '"{title}"의 {lang} 번역  요청의 작업 완료 예정일시가 2시간 남았습니다.',
            admin_a09: '"{title}"의 {lang} 번역 요청의 완료예정일시까지 전체 작업이 완료되지 못했습니다.',
            admin_a10: '"{title}"의 {lang} 번역 요청을 작업완료하였습니다.',
            //
            requestor_a02: '"{title}" 게시글에 답글이 등록되었습니다.',
            requestor_a03: '"{title}" 게시글에 댓글이 등록되었습니다.',
            client_a03: '"{title}" 게시글에 답글이 등록되었습니다.',
            client_a04: '"{title}" 게시글에 댓글이 등록되었습니다.',
            tc_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            tc_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            translator_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            translator_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            reviewer_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            reviewer_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            admin_a11: '"{title}" 게시글이 등록되었습니다.',
            admin_a12: '"{title}" 게시글에 답글이 등록되었습니다.',
            admin_a13: '"{title}" 게시글에 댓글이 등록되었습니다.'
        },
        "sms": {
            requestor_a01: '{username}님께서 요청하신 "{title}"의 {lang} 번역이 완료되었습니다. -Flitto-',
            client_a01: '{username}({userid})님께서 "{title}"의 {lang} 번역을 요청하였습니다. - Flitto -',
            client_a02: '{username}({userid})님께서 요청하신 "{title}"의 {lang} 번역이 완료되었습니다. -Flitto-',
            //
            tc_a01: '"{title}"의 {org_lang} TC작업요청이 등록되었습니다. 확인 후 먼저 수락해주세요. - Flitto -',
            tc_a02: '"{title}"의 {org_lang} TC작업 마감시간이 2시간 남았습니다. - Flitto -',
            tc_a03: '"{title}"의 {org_lang} TC작업 마감시간이 초과되었습니다. - Flitto -',
            tc_a04: '"{title}"의 {org_lang} TC작업이 할당되었습니다 TC작업을 진행해주세요. - Flitto -',
            //
            translator_a01: '"{title}"의 {org_lang}->{dst_lang} 번역요청이 등록되었습니다. 확인 후 먼저 수락해주세요. - Flitto -',
            translator_a02: '"{title}"의 {org_lang}->{dst_lang} 번역 마감시간이 2시간 남았습니다. - Flitto -',
            translator_a03: '"{title}"의 {org_lang}->{dst_lang} 번역 마감시간이 초과되었습니다. - Flitto -',
            translator_a04: '"{title}"의 {org_lang}->{dst_lang} 번역이 할당되었습니다. 번역을 진행해주세요. - Flitto -',
            //
            reviewer_a01: '"{title}"의 {dst_lang} 검수요청이 등록되었습니다. 확인 후 먼저 수락해주세요. - Flitto -',
            reviewer_a02: '"{title}"의 {dst_lang} 검수 마감시간이 2시간 남았습니다. - Flitto -',
            reviewer_a03: '"{title}"의 {dst_lang} 검수 마감시간이 초과되었습니다. - Flitto -',
            reviewer_a04: '"{title}"의 {dst_lang} 검수가 할당되었습니다. 검수를 진행해주세요. - Flitto -',
            //
            admin_a01: '{companyname}의 {username}님께서 "{title}"의 {lang} 번역을 요청하였습니다. - Flitto -',
            admin_a02: '"{title}"의 {org_lang} TC작업 요청 후 2시간이 지났지만 아직 수락되지 않았습니다. - Flitto -',
            admin_a03: '"{title}"의 {org_lang} TC작업 마감시간이 지났지만, {username}님이 TC작업을 완료하지 않았습니다. - Flitto -',
            admin_a04: '"{title}"의 {org_lang}->{dst_lang} 번역 요청 후 2시간이 지났지만, 아직 수락되지 않았습니다. - Flitto -',
            admin_a05: '"{title}"의 {org_lang}->{dst_lang} 번역작업 마감시간이 지났지만, {username}님이 번역을 완료하지 않았습니다. - Flitto -',
            admin_a06: '"{title}"의 {dst_lang} 검수 요청 후 2시간이 지났지만 아직 수락되지 않았습니다. - Flitto -',
            admin_a07: '"{title}"의 {dst_lang} 검수 마감시간이 지났지만, {username}님이 검수를 완료하지 않았습니다. - Flitto -',
            admin_a08: '{username}님이 요청한 "{title}"의 {lang} 번역 요청의 작업 완료 예정일시가 2시간 남았습니다. - Flitto -',
            admin_a09: '{username}님이 요청한 "{title}"의 {lang} 번역 요청의 완료예정일시까지 전체 작업이 완료되지 못했습니다. - Flitto -',
            admin_a10: '{username}님이 요청한 "{title}"의 {lang} 번역 요청을 작업완료하였습니다. - Flitto -',
            //
            requestor_a02: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            requestor_a03: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            client_a03: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            client_a04: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            tc_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            tc_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            translator_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            translator_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            reviewer_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            reviewer_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a11: '"{title}" 게시글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a12: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a13: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -'
        }
    },
    "EN": {
        "language": [
            'Korean', 'English', 'Japanese', 'Chinese (Simplified)', 
            'Chinese (Traditional)','Indonesian', 'Vietnamese',
            'Thai', 'Spanish'
        ],
        "email": {
            requestor_a01: '[Flitto] The translation has been completed.',
            client_a01: '[Flitto] The translation request has been submitted.',
            client_a02: '[Flitto] The translation has been completed.',
            tc_a01: '[Flitto] A request for TC work has been submitted.',
            tc_a02: '[Flitto] 2 hours remain until the deadline of your TC work.',
            tc_a03: '[Flitto] The deadline of your TC work has been exceeded.',
            tc_a04: '[Flitto] A TC work has been assigned.',
            translator_a01: '[Flitto] A translation request has been submitted.',
            translator_a02: '[Flitto] 2 hours remain until the deadline of the translation work.',
            translator_a03: '[Flitto] The deadline of your translation work has been exceeded.',
            translator_a04: '[Flitto] A translation work has been assigned.',
            reviewer_a01: '[Flitto] A proofreading request has been submitted.',
            reviewer_a02: '[Flitto] 2 hours remain until the deadline of the proofreading work.',
            reviewer_a03: '[Flitto] The deadline of your proofreading work has been exceeded.',
            reviewer_a04: '[Flitto] A proofreading work has been assigned.',
            admin_a01: '[Flitto] A translation request has been submitted.',
            admin_a02: '[Flitto] There is a pending TC work that has not been accepted.',
            admin_a03: '[Flitto] The deadline has passed for a TC work.',
            admin_a04: '[Flitto] There is a pending translation that has not been accepted.',
            admin_a05: '[Flitto] The deadline has passed for a translation.',
            admin_a06: '[Flitto] There is a pending proofreading work that has not been accepted.',
            admin_a07: '[Flitto] The deadline has passed for a proofreading work.',
            admin_a08: '[Flitto] 2 hours remain until the deadline of a request.',
            admin_a09: '[Flitto] A request failed to meet the date of completion.',
            admin_a10: '[Flitto] The request has been fully completed.',
//
            requestor_a04: 'You have successfully registered to [Flitto]\'s translation platform.',
            client_a05: 'You have successfully registered to [Flitto]\'s translation platform.',
            tc_a07: 'You have successfully registered to [Flitto]\'s translation platform.',
            translator_a07: 'You have successfully registered to [Flitto]\'s translation platform.',
            reviewer_a07: 'You have successfully registered to [Flitto]\'s translation platform.',
            admin_a14: 'You have successfully registered to [Flitto]\'s translation platform.',
//
            requestor_a02: '[플리토] 게시글에 답글이 등록되었습니다.',
            requestor_a03: '[플리토] 게시글에 댓글이 등록되었습니다.',
            client_a03: '[플리토] 게시글에 답글이 등록되었습니다.',
            client_a04: '[플리토] 게시글에 댓글이 등록되었습니다.',
            tc_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            tc_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            translator_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            translator_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            reviewer_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            reviewer_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            admin_a11: '[플리토] 새로운 게시글이 등록되었습니다.',
            admin_a12: '[플리토] 게시글에 답글이 등록되었습니다.',
            admin_a13: '[플리토] 게시글에 댓글이 등록되었습니다.'
        },
        "web_push": {
            requestor_a01: 'The {lang} translation for "{title}" has been completed.',
            client_a01: 'A(n) {lang} translation request has been made for "{title}".',
            client_a02: 'The {lang} translation for "{title}" has been completed.',
            //
            tc_a01: 'A request for TC work in {org_lang} for "{title}" has been submitted. Check the request and be the first one to accept.',
            tc_a02: 'There are 2 hours remaining until the deadline for the {org_lang} TC work of "{title}".',
            tc_a03: 'The deadline for the TC work in {org_lang} of "{title}" has been exceeded.',
            tc_a04: 'A TC work in {org_lang} for "{title}" has been assigned to you. Please proceed with the job.',
            //
            translator_a01: 'A(n) {org_lang}->{dst_lang} translation request has been made for "{title}". Check the request and be the first one to accept.',
            translator_a02: 'There are 2 hours remaining until the deadline for the {org_lang}->{dst_lang} translation of "{title}".',
            translator_a03: 'The deadline for the {org_lang}->{dst_lang} translation of "{title}" has been exceeded.',
            translator_a04: 'A(n) {org_lang}->{dst_lang} translation for "{title}" has been assigned to you. Please proceed with the translation.',
            //
            reviewer_a01: 'A proofreading request in {dst_lang} for "{title}" has been submitted. Check the request and be the first one to accept.',
            reviewer_a02: 'There are 2 hours remaining until the deadline for the {dst_lang} proofreading work of "{title}".',
            reviewer_a03: 'The deadline for the proofreading work in {dst_lang} of "{title}" has been exceeded.',
            reviewer_a04: 'A proofreading work in {dst_lang} for "{title}" has been assigned to you. Please proceed with the proofreading.',
            //
            admin_a01: 'A(n) {lang} translation request has been made for "{title}".',
            admin_a02: 'It has been 2 hours since a TC work in {org_lang} for "{title}" has been requested, but it is yet to be accepted.',
            admin_a03: 'The deadline for the TC work in {org_lang} of "{title}" has been exceeded, but the TC editor has not completed the job.',
            admin_a04: 'It has been 2 hours since a(n) {org_lang}->{dst_lang} translation request for "{title}" has been made, but it is yet to be accepted.',
            admin_a05: 'The deadline for the {org_lang}->{dst_lang} translation of "{title}" has been exceeded, but the translator has not completed the job.',
            admin_a06: 'It has been 2 hours since a proofreading work in {dst_lang} for "{title}" has been requested, but it is yet to be accepted.',
            admin_a07: 'The deadline for the proofreading work in {dst_lang} of "{title}" has been exceeded, but the proofreader has not completed the job.',
            admin_a08: 'There are 2 hours remaining until the deadline for the {lang} translation of "{title}".',
            admin_a09: 'The {lang} translation of "{title}" failed to meet the estimated date of completion.',
            admin_a10: 'The {lang} translation for "{title}" has been completed.',
            //
            requestor_a02: '"{title}" 게시글에 답글이 등록되었습니다.',
            requestor_a03: '"{title}" 게시글에 댓글이 등록되었습니다.',
            client_a03: '"{title}" 게시글에 답글이 등록되었습니다.',
            client_a04: '"{title}" 게시글에 댓글이 등록되었습니다.',
            tc_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            tc_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            translator_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            translator_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            reviewer_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            reviewer_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            admin_a11: '"{title}" 게시글이 등록되었습니다.',
            admin_a12: '"{title}" 게시글에 답글이 등록되었습니다.',
            admin_a13: '"{title}" 게시글에 댓글이 등록되었습니다.'
        },
        "sms": {
            requestor_a01: 'The {lang} translation for "{title}" requested by {username} has been completed. - Flitto -',
            client_a01: 'A(n) {lang} translation request for "{title}" has been made by {username}({userid}). - Flitto -',
            client_a02: 'The {lang} translation for "{title}" requested by {username}({userid}) has been completed. - Flitto -',
            //
            tc_a01: 'A request for TC work in {org_lang} for "{title}" has been submitted. Check the request and be the first one to accept. - Flitto -',
            tc_a02: 'There are 2 hours remaining until the deadline for the {org_lang} TC work of "{title}". - Flitto -',
            tc_a03: 'The deadline for the TC work in {org_lang} of "{title}" has been exceeded. - Flitto -',
            tc_a04: 'A TC work in {org_lang} for "{title}" has been assigned to you. Please proceed with the job. - Flitto -',
            //
            translator_a01: 'A(n) {org_lang}->{dst_lang} translation request has been made for "{title}". Check the request and be the first one to accept. - Flitto -',
            translator_a02: 'There are 2 hours remaining until the deadline for the {org_lang}->{dst_lang} translation of "{title}". - Flitto -',
            translator_a03: 'The deadline for the {org_lang}->{dst_lang} translation of "{title}" has been exceeded. - Flitto -',
            translator_a04: 'A(n) {org_lang}->{dst_lang} translation for "{title}" has been assigned to you. Please proceed with the translation. - Flitto -',
            //
            reviewer_a01: 'A proofreading request in {dst_lang} for "{title}" has been submitted. Check the request and be the first one to accept. - Flitto -',
            reviewer_a02: 'There are 2 hours remaining until the deadline for the {dst_lang} proofreading work of "{title}". - Flitto -',
            reviewer_a03: 'The deadline for the proofreading work in {dst_lang} of "{title}" has been exceeded. - Flitto -',
            reviewer_a04: 'A proofreading work in {dst_lang} for "{title}" has been assigned to you. Please proceed with the proofreading. - Flitto -',
            //
            admin_a01: 'A(n) {org_lang}->{dst_lang} translation request for "{title}" has been made by {username} of {companyname}. - Flitto -',
            admin_a02: 'It has been 2 hours since a TC work in {org_lang} for "{title}" has been requested, but it is yet to be accepted. - Flitto -',
            admin_a03: 'The deadline for the TC work in {org_lang} of "{title}" has been exceeded, but {username} has not completed the job. - Flitto -',
            admin_a04: 'It has been 2 hours since a(n) {org_lang}->{dst_lang} translation request for "{title}" has been made, but it is yet to be accepted. - Flitto -',
            admin_a05: 'The deadline for the {org_lang}->{dst_lang} translation of "{title}" has been exceeded, but {username} has not completed the job. - Flitto -',
            admin_a06: 'It has been 2 hours since a proofreading work in {dst_lang} for "{title}" has been requested, but it is yet to be accepted. - Flitto -',
            admin_a07: 'The deadline for the proofreading work in {dst_lang} of "{title}" has been exceeded, but {username} has not completed the job. - Flitto -',
            admin_a08: 'There are 2 hours remaining until the deadline for the {org_lang}->{dst_lang} translation of "{title}" requested by {username}. - Flitto -',
            admin_a09: 'The {org_lang}->{dst_lang} translation of "{title}" requested by {username} failed to meet the date of completion. - Flitto -',
            admin_a10: 'The {org_lang}->{dst_lang} translation for "{title}" requested by {username} has been completed. - Flitto -',
            //
            requestor_a02: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            requestor_a03: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            client_a03: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            client_a04: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            tc_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            tc_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            translator_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            translator_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            reviewer_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            reviewer_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a11: '"{title}" 게시글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a12: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a13: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -'
        }
    },
    "JP": {
        "language": [
            '韓国語', '英語', '日本語', '中国語(簡体)',
            '中国語(繁体)', 'インドネシア語', 'ベトナム語',
            'タイ語', 'スペイン語'
        ],
        "email": {
            requestor_a01: '[Flitto] 翻訳が完了しました。',
            client_a01: '[Flitto] 翻訳要請が登録されました。',
            client_a02: '[Flitto] 翻訳が完了しました。',
            tc_a01: '[Flitto] TC作業要請が登録されました。',
            tc_a02: '[Flitto] TC作業の締切が残りあと2時間です。',
            tc_a03: '[Flitto] TC作業の締切が過ぎました。',
            tc_a04: '[Flitto] TC作業を受け取りました。',
            translator_a01: '[Flitto]  翻訳要請が登録されました。',
            translator_a02: '[Flitto] 翻訳の締切が残りあと2時間です。',
            translator_a03: '[Flitto] 翻訳の締切が過ぎました。',
            translator_a04: '[Flitto] 翻訳を受け取りました。',
            reviewer_a01: '[Flitto] 監修要請が登録されました。',
            reviewer_a02: '[Flitto] 監修の締切が残りあと2時間です。',
            reviewer_a03: '[Flitto] 監修の締切が過ぎました。',
            reviewer_a04: '[Flitto] 監修を受け取りました。',
            admin_a01: ' [Flitto] 翻訳要請が登録されました。',
            admin_a02: '[Flitto] 受け取られていないTC作業があります。',
            admin_a03: '[Flitto] 締切が過ぎたTC作業があります。',
            admin_a04: '[Flitto] 受け取られていない翻訳があります。',
            admin_a05: '[Flitto] 締切が過ぎた翻訳があります。',
            admin_a06: '[Flitto] 受け取られていない翻訳があります。',
            admin_a07: '[Flitto] 締切が過ぎた監修があります。',
            admin_a08: '[Flitto] 完了予定日時まで残りあと2時間の要請があります。',
            admin_a09: '[Flitto] 完了予定日時まで完了できなかった要請があります。',
            admin_a10: '[Flitto] 要請の全体作業が完了しました。',
//
            requestor_a04: '[플리토] 번역 플랫폼에 가입되었습니다.',
            client_a05: '[플리토] 번역 플랫폼에 가입되었습니다.',
            tc_a07: '[플리토] 번역 플랫폼에 가입되었습니다.',
            translator_a07: '[플리토] 번역 플랫폼에 가입되었습니다.',
            reviewer_a07: '[플리토] 번역 플랫폼에 가입되었습니다.',
            admin_a14: '[플리토] 번역 플랫폼에 가입되었습니다.',
//
            requestor_a02: '[플리토] 게시글에 답글이 등록되었습니다.',
            requestor_a03: '[플리토] 게시글에 댓글이 등록되었습니다.',
            client_a03: '[플리토] 게시글에 답글이 등록되었습니다.',
            client_a04: '[플리토] 게시글에 댓글이 등록되었습니다.',
            tc_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            tc_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            translator_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            translator_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            reviewer_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            reviewer_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            admin_a11: '[플리토] 새로운 게시글이 등록되었습니다.',
            admin_a12: '[플리토] 게시글에 답글이 등록되었습니다.',
            admin_a13: '[플리토] 게시글에 댓글이 등록되었습니다.'
        },
        "web_push": {
            requestor_a01: '"{title}"の {lang} 翻訳が完了しました。',
            client_a01: '"{title}"の {lang} 翻訳が要請されました。',
            client_a02: '"{title}"の {lang} 翻訳が完了しました。',
            //
            tc_a01: '"{title}"の {org_lang} TC作業要請が登録されました。確認してから受け取ってください。',
            tc_a02: '"{title}"の {org_lang} TC作業の締切が残りあと2時間です。',
            tc_a03: '"{title}"の {org_lang} TC作業の締切が過ぎました。',
            tc_a04: '"{title}"の {org_lang} TC作業を受け取りました。TC作業を始めてください。',
            //
            translator_a01: '"{title}"の {org_lang}->{dst_lang} 翻訳要請が登録されました。確認してから受け取ってください。',
            translator_a02: '"{title}"の {org_lang}->{dst_lang} 翻訳の締切が残りあと2時間です。',
            translator_a03: '"{title}"の {org_lang}->{dst_lang} 翻訳の締切が過ぎました。',
            translator_a04: '"{title}"の {org_lang}->{dst_lang} 翻訳が割り当てられました。 翻訳を行ってください。',
            //
            reviewer_a01: '"{title}"の {dst_lang} 監修要請が登録されました。確認してから受け取ってください。',
            reviewer_a02: '"{title}"の {dst_lang} 監修の締切が残りあと2時間です。',
            reviewer_a03: '"{title}"の {dst_lang} 監修の締切が過ぎました。',
            reviewer_a04: '"{title}"の {dst_lang} 監修を受け取りました。監修を始めてください。',
            //
            admin_a01: '"{title}"の {lang} 翻訳が要請されました。',
            admin_a02: '"{title}"の {org_lang} TC作業が要請から2時間過ぎていますが、まだ受け取られていません。',
            admin_a03: '"{title}"の {org_lang} TC作業の締切が過ぎましたが、TC作業者がまだTC作業を完了していません。',
            admin_a04: '"{title}"の {org_lang}->{dst_lang} 翻訳が要請から2時間過ぎていますが、まだ受け取られていません。',
            admin_a05: '"{title}"の {org_lang}->{dst_lang} 翻訳作業の締切が過ぎましたが、翻訳家がまだ翻訳を完了していません。',
            admin_a06: '"{title}"の {dst_lang} 監修が要請から2時間過ぎていますが、まだ受け取られていません。',
            admin_a07: '"{title}"の {dst_lang} 監修の締切が過ぎましたが、監修者がまだ監修を完了していません。',
            admin_a08: '"{title}"の {lang} 翻訳要請の作業完了予定日時が残りあと2時間です。',
            admin_a09: '"{title}"の {lang} 翻訳要請の完了予定日時まで全体の作業が完了できませんでした。',
            admin_a10: '"{title}"の {lang} 翻訳要請の作業が完了しました。',
            //
            requestor_a02: '"{title}" 게시글에 답글이 등록되었습니다.',
            requestor_a03: '"{title}" 게시글에 댓글이 등록되었습니다.',
            client_a03: '"{title}" 게시글에 답글이 등록되었습니다.',
            client_a04: '"{title}" 게시글에 댓글이 등록되었습니다.',
            tc_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            tc_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            translator_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            translator_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            reviewer_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            reviewer_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            admin_a11: '"{title}" 게시글이 등록되었습니다.',
            admin_a12: '"{title}" 게시글에 답글이 등록되었습니다.',
            admin_a13: '"{title}" 게시글에 댓글이 등록되었습니다.'
        },
        "sms": {
            requestor_a01: '{username}様が要請した "{title}"の {lang} 翻訳が完了しました。 - Flitto -',
            client_a01: '{username}({userid})様が "{title}"の {lang} 翻訳を要請しました。 - Flitto -',
            client_a02: '{username}({userid})様が要請した "{title}"の {lang} 翻訳が完了しました。 - Flitto -',
            //
            tc_a01: '"{title}"の {org_lang} TC作業要請が登録されました。確認してから受け取ってください。 - Flitto -',
            tc_a02: '"{title}"の {org_lang} TC作業の締切が残りあと2時間です。 - Flitto -',
            tc_a03: '"{title}"の {org_lang} TC作業の締切が過ぎました。- Flitto -',
            tc_a04: '"{title}"の {org_lang} TC作業を受け取りました。TC作業を始めてください。- Flitto -',
            //
            translator_a01: '"{title}"の {org_lang}->{dst_lang} 翻訳要請が登録されました。確認してから受け取ってください。- Flitto -',
            translator_a02: '"{title}"の {org_lang}->{dst_lang} 翻訳の締切が残りあと2時間です。 - Flitto -',
            translator_a03: '"{title}"の {org_lang}->{dst_lang} 翻訳の締切が過ぎました。- Flitto -',
            translator_a04: '"{title}"の {org_lang}->{dst_lang} 翻訳が割り当てられました。 翻訳を行ってください。- Flitto -',
            //
            reviewer_a01: '"{title}"の {dst_lang} 監修要請が登録されました。確認してから受け取ってください。 - Flitto -',
            reviewer_a02: '"{title}"の {dst_lang} 監修の締切が残りあと2時間です。 - Flitto -',
            reviewer_a03: '"{title}"の {dst_lang} 監修の締切が過ぎました。 - Flitto -',
            reviewer_a04: '"{title}"の {dst_lang} 監修を受け取りました。監修を始めてください。- Flitto -',
            //
            admin_a01: '{companyname}の {username}様が "{title}"の {org_lang}->{dst_lang} 翻訳を要請しました。 - Flitto -',
            admin_a02: '"{title}"の {org_lang} TC作業が要請から2時間過ぎていますが、まだ受け取られていません。 - Flitto -',
            admin_a03: '"{title}"の {org_lang} TC作業の締切が過ぎましたが、{username}様がまだTC作業を完了していません。- Flitto -',
            admin_a04: '"{title}"の {org_lang}->{dst_lang} 翻訳が要請から2時間過ぎていますが、まだ受け取られていません。- Flitto -',
            admin_a05: '"{title}"の {org_lang}->{dst_lang} 翻訳作業の締切が過ぎましたが、{username}様がまだ翻訳を完了していません。- Flitto -',
            admin_a06: '"{title}"の {dst_lang} 監修が要請から2時間過ぎていますが、まだ受け取られていません。 - Flitto -',
            admin_a07: '"{title}"の {dst_lang} 監修の締切が過ぎましたが、{username}様がまだ監修を完了していません。- Flitto -',
            admin_a08: '{username}様が要請した "{title}"の {org_lang}->{dst_lang} 翻訳用紙絵の作業完了予定日時が残りあと2時間です。- Flitto -',
            admin_a09: '{username}様が要請した "{title}"の {org_lang}->{dst_lang} 翻訳要請の完了予定日時まで全体の作業が完了できませんでした。 - Flitto -',
            admin_a10: '{username}様が要請した "{title}"の {org_lang}->{dst_lang} 翻訳要請の作業が完了しました。 - Flitto -',
            //
            requestor_a02: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            requestor_a03: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            client_a03: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            client_a04: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            tc_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            tc_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            translator_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            translator_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            reviewer_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            reviewer_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a11: '"{title}" 게시글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a12: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a13: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -'
        }
    },
    "CN": {
        "language": [
            '韩语', '英语', '日本', '中文(简体)',
            '中文(繁体)', '印度尼西亚语', '越南语', 
            '泰国语', '西班牙语'
        ],
        "email": {
            requestor_a01: '[翻译通] 翻译已完成。',
            client_a01: '[翻译通] 翻译请求已发布。',
            client_a02: '[翻译通] 翻译已完成。',
            tc_a01: '[翻译通] 您有一条TC编辑请求。',
            tc_a02: '[翻译通] TC编辑时间剩2个小时。',
            tc_a03: '[翻译通] TC编辑已超过原定截止时间。',
            tc_a04: '[翻译通] 您接收了一条TC编辑请求。',
            translator_a01: '[翻译通] 您有一条翻译请求。',
            translator_a02: '[翻译通] 翻译时间还剩2个小时。',
            translator_a03: '[翻译通] 翻译时间已超过原定截止时间。',
            translator_a04: '[翻译通] 您接收了一条翻译请求。',
            reviewer_a01: '[翻译通] 您有一条校对请求。',
            reviewer_a02: '[翻译通] 校对时间还剩两个小时。',
            reviewer_a03: '[翻译通] 校对时间已超过原定截止时间。',
            reviewer_a04: '[翻译通] 您接收了一条校对请求。',
            admin_a01: '[翻译通] 您有一条翻译请求。',
            admin_a02: '[翻译通] 该TC编辑请求仍未接单。',
            admin_a03: '[翻译通] 该TC编辑时间已超过原定截止日时。',
            admin_a04: '[翻译通] 该翻译请求仍未接单。',
            admin_a05: '[翻译通] 该翻译请求已超过原定截止时间。',
            admin_a06: '[翻译通] 该校对请求仍未接单。',
            admin_a07: '[翻译通] 该校对请求已超过原定截止时间。',
            admin_a08: '[翻译通] 该翻译请求离预定完成时间还剩2个小时。',
            admin_a09: '[翻译通] 该翻译请求未能按时完成。',
            admin_a10: '[翻译通] 该翻译请求已全部完成。',
//
            requestor_a04: '[翻译通]您已成功加入翻译平台。',
            client_a05: '[翻译通]您已成功加入翻译平台。',
            tc_a07: '[翻译通]您已成功加入翻译平台。',
            translator_a07: '[翻译通]您已成功加入翻译平台。',
            reviewer_a07: '[翻译通]您已成功加入翻译平台。',
            admin_a14: '[翻译通]您已成功加入翻译平台。',
//
            requestor_a02: '[플리토] 게시글에 답글이 등록되었습니다.',
            requestor_a03: '[플리토] 게시글에 댓글이 등록되었습니다.',
            client_a03: '[플리토] 게시글에 답글이 등록되었습니다.',
            client_a04: '[플리토] 게시글에 댓글이 등록되었습니다.',
            tc_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            tc_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            translator_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            translator_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            reviewer_a05: '[플리토] 게시글에 답글이 등록되었습니다.',
            reviewer_a06: '[플리토] 게시글에 댓글이 등록되었습니다.',
            admin_a11: '[플리토] 새로운 게시글이 등록되었습니다.',
            admin_a12: '[플리토] 게시글에 답글이 등록되었습니다.',
            admin_a13: '[플리토] 게시글에 댓글이 등록되었습니다.'
        },
        "web_push": {
            requestor_a01: '"{title}"的 {lang} 翻译已完成。',
            client_a01: '您的"{title}"的 {lang} 翻译请求已发布。',
            client_a02: '"{title}"的 {lang} 翻译已完成。',
            //
            tc_a01: '您有一条"{title}" 的{org_lang}TC编辑请求。确认后请立即接单。',
            tc_a02: '"{title}"的{org_lang}TC编辑时间还剩2个小时。',
            tc_a03: '"{title}"的{org_lang} TC编辑已超过原定截止时间。',
            tc_a04: '您已接收了{title}的{org_lang} TC编辑请求，请开始TC编辑。', 
            //
            translator_a01: '您有一条"{title}"的{org_lang}->{dst_lang} 翻译请求。确认后请立即接单。',
            translator_a02: '"{title}"的 {org_lang}->{dst_lang} 翻译时间还剩2个小时。',
            translator_a03: '"{title}"的 {org_lang}->{dst_lang} 翻译已超过原定截止时间。',
            translator_a04: '您已接收了"{title}"的{org_lang}->{dst_lang}翻译请求。请进行翻译。',
            //
            reviewer_a01: '您有一条"{title}"的{dst_lang}校对请求。确认后请立即接单。',
            reviewer_a02: '"{title}"的{dst_lang}校对时间还剩2个小时。',
            reviewer_a03: '"{title}"的{dst_lang}校对时间已超过原定截止时间。',
            reviewer_a04: '您已接收了"{title}"的{dst_lang}校对请求，请进行校对。',
            //
            admin_a01: '您有一条"{title}"的{lang}翻译请求。 ',
            admin_a02: '"{title}"的{org_lang}TC编辑请求已超过2个小时，仍未接单。',
            admin_a03: '"{title}"的{org_lang}TC编辑时间已经超过原定截止时间，TC编辑者仍未完成TC编辑。',
            admin_a04: '"{title}"的{org_lang}->{dst_lang}翻译请求已超过2个小时，仍未接单。',
            admin_a05: '"{title}"的{org_lang}->{dst_lang}翻译时间已超过截止时间，翻译家仍未完成翻译。',
            admin_a06: '"{title}"的{dst_lang}校对请求已超过2个小时，仍未接单。',
            admin_a07: '"{title}"的{dst_lang}校对时间已超过截止时间，{username}仍未完成校对。',
            admin_a08: '"{title}"的{lang}翻译时间还剩2个小时。',
            admin_a09: '"{title}"的{lang}翻译请求未能按时完成。',
            admin_a10: '"{title}"的{lang}翻译请求已全部完成。',
            //
            requestor_a02: '"{title}" 게시글에 답글이 등록되었습니다.',
            requestor_a03: '"{title}" 게시글에 댓글이 등록되었습니다.',
            client_a03: '"{title}" 게시글에 답글이 등록되었습니다.',
            client_a04: '"{title}" 게시글에 댓글이 등록되었습니다.',
            tc_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            tc_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            translator_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            translator_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            reviewer_a05: '"{title}" 게시글에 답글이 등록되었습니다.',
            reviewer_a06: '"{title}" 게시글에 댓글이 등록되었습니다.',
            admin_a11: '"{title}" 게시글이 등록되었습니다.',
            admin_a12: '"{title}" 게시글에 답글이 등록되었습니다.',
            admin_a13: '"{title}" 게시글에 댓글이 등록되었습니다.'
        },
        "sms": {
            requestor_a01: '{username}的 "{title}" {lang} 翻译已完成。- Flitto -',
            client_a01: '{username}({userid})的 "{title}" {lang} 翻译请求已发布。 - Flitto -',
            client_a02: '{username}({userid})的 "{title}" {lang} 翻译已完成。 - Flitto -',
            //
            tc_a01: '您有一条"{title}" 的{org_lang}TC编辑请求。确认后请立即接单。 - Flitto -',
            tc_a02: '"{title}"的{org_lang}TC编辑时间还剩2个小时。- Flitto -',
            tc_a03: '"{title}"的{org_lang} TC编辑已超过原定截止时间。- Flitto -',
            tc_a04: '您已接收了"{title}"的{org_lang} TC编辑请求，请开始TC编辑。- Flitto -',
            //
            translator_a01: '您有一条"{title}"的{org_lang}->{dst_lang} 翻译请求。确认后请立即接单。- Flitto -',
            translator_a02: '{title}的 {org_lang}->{dst_lang} 翻译时间还剩2个小时。 - Flitto -',
            translator_a03: '"{title}"的{org_lang}->{dst_lang}翻译已超过原定截止时间。- Flitto -',
            translator_a04: '您已接收了"{title}"的{org_lang}->{dst_lang}翻译请求。请进行翻译。- Flitto -',
            //
            reviewer_a01: '您有一条"{title}"的{dst_lang}校对请求。确认后请立即接单。- Flitto -',
            reviewer_a02: '"{title}"的{dst_lang}校对时间还剩2个小时。- Flitto -',
            reviewer_a03: '"{title}"的{dst_lang}校对时间已超过原定截止时间。- Flitto -',
            reviewer_a04: '您已接收了"{title}"的{dst_lang}校对请求，请进行校对。- Flitto -',
            //
            admin_a01: '{companyname}的{username}发布了一条"{title}"{org_lang}->{dst_lang} 翻译请求。 - Flitto - ',
            admin_a02: '"{title}"的{org_lang}TC编辑请求已超过2个小时，仍未接单。- Flitto -',
            admin_a03: '"{title}"的{org_lang}TC编辑时间已经超过原定截止时间，{username}仍未完成TC编辑。- Flitto -',
            admin_a04: '"{title}"的{org_lang}->{dst_lang}翻译请求已超过2个小时，仍未接单。- Flitto -',
            admin_a05: '"{title}"的{org_lang}->{dst_lang}翻译时间已超过截止时间，{username}仍未完成翻译。- Flitto -',
            admin_a06: '"{title}"的{dst_lang}校对请求已超过2个小时，仍未接单。- Flitto -',
            admin_a07: '"{title}"的{dst_lang}校对时间已超过截止时间，{username}仍未完成校对。- Flitto -',
            admin_a08: '{username}的"{title}"{org_lang}->{dst_lang}翻译时间还剩2个小时。- Flitto -',
            admin_a09: '{username}的"{title}"{org_lang}->{dst_lang}翻译请求未能按时完成。- Flitto -',
            admin_a10: '{username}请求的"{title}"{org_lang}->{dst_lang}翻译请求已全部完成。- Flitto -',
            //
            requestor_a02: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            requestor_a03: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            client_a03: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            client_a04: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            tc_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            tc_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            translator_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            translator_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            reviewer_a05: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            reviewer_a06: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a11: '"{title}" 게시글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a12: '"{title}" 게시글에 답글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -',
            admin_a13: '"{title}" 게시글에 댓글이 등록되었습니다. 확인해주시기 바랍니다.- Flitto -'
        }
    }
}
# CAMS User Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Dashboard Overview](#dashboard-overview)
3. [Applications Module](#applications-module)
4. [Workflow & Approvals](#workflow--approvals)
5. [Document Management](#document-management)
6. [Assessments](#assessments)
7. [Certifications](#certifications)
8. [Renewals](#renewals)
9. [Reports & LCS](#reports--lcs)
10. [FAQs & Troubleshooting](#faqs--troubleshooting)

---

## Getting Started

### Login to CAMS
1. Open: http://localhost:3000
2. Enter credentials:
   - **Email:** admin@tma.com
   - **Password:** admin123
3. Click **Login**

### User Roles

| Role | Permissions |
|------|------------|
| **Applicant** | Submit applications, upload documents, track status |
| **QA Officer** | Review applications, verify documents, recommend approval |
| **Assessor** | Schedule and conduct assessments |
| **HOD/E&MM** | Review QA recommendations, approve/reject |
| **HQC** | Final approval authority, issue certificates |
| **Administrator** | Manage users, departments, system settings |

---

## Dashboard Overview

The dashboard shows real-time system statistics:

- **Total Applications** - All submitted applications
- **Pending Reviews** - Applications waiting for approval
- **Active Certifications** - Valid, issued certificates
- **Expiring Soon** - Certificates expiring in 30 days
- **Pending Approvals** - Awaiting your action

### Navigation
Use the sidebar to navigate to different modules:
- 📊 Dashboard
- 📋 Applications
- 📝 Assessments
- ✅ Approvals
- ⚙️ Settings

---

## Applications Module

### Create New Application

1. Click **Applications** in sidebar
2. Click **New Application** button
3. Select application type:
   - **Initial Issue** - First-time certification
   - **Renewal** - Extend existing CA validity
   - **Extension** - Prolong current period
   - **Amendment** - Modify existing CA
   - **Re-Issue** - After break period
   - **One-Off Authorization** - Temporary

4. Click **Create**

### Application Workflow

```
┌──────────┐
│  Draft   │ - Initial state, can edit
└────┬─────┘
     │ Submit
┌────▼──────────┐
│   Submitted   │ - Sent for review
└────┬──────────┘
     │ QA Officer reviews
┌────▼──────────┐
│  QA Review    │ - Document verification
└────┬──────────┘
     │ Approved/Rejected
┌────▼──────────┐
│  Assessment   │ - Assessor evaluates
└────┬──────────┘
     │ Assessment complete
┌────▼──────────┐
│ HOD Approval  │ - Management review
└────┬──────────┘
     │ Recommended
┌────▼──────────┐
│ HQC Approval  │ - Final authority
└────┬──────────┘
     │ Approved
┌────▼──────────┐
│    Issued     │ - Certificate generated
└────┬──────────┘
     │
┌────▼──────────┐
│    Active     │ - Valid and in use
└────┬──────────┘
     │ After 24 months
┌────▼──────────┐
│    Expired    │ - Requires renewal
└───────────────┘
```

### Application Status Details

| Status | Description | Next Action |
|--------|-------------|------------|
| Draft | Saved but not submitted | Complete and submit |
| Submitted | Awaiting QA review | Wait for QA Officer |
| QA Review | Being reviewed | QA Officer provides feedback |
| Assessment | Scheduled for assessment | Assessor conducts assessment |
| HOD Approval | Pending HOD review | HOD provides recommendation |
| HQC Approval | Final approval stage | HQC issues or rejects |
| Issued | Certificate generated | Certificate issued |
| Active | In use | Track expiry date |
| Expired | No longer valid | Initiate renewal |

---

## Workflow & Approvals

### QA Officer Review Process

1. Go to **Approvals** tab
2. Select pending application
3. Review documents:
   - ✓ Training Records
   - ✓ License Copies
   - ✓ Competency Records
4. Provide feedback
5. **Approve** or **Return for Correction**

### HOD/E&MM Review

1. Receive QA Officer recommendation
2. Review assessment results
3. Make approval decision:
   - **Approve** - Forward to HQC
   - **Reject** - Return to applicant
   - **Request More Info** - Ask for clarification

### HQC Final Approval

1. Review all approvals
2. Verify compliance with QA SOP-01
3. **Issue Certificate** or **Reject**
4. System automatically:
   - Generates CA number
   - Creates certificate
   - Sends notification
   - Updates LCS

---

## Document Management

### Upload Documents

1. Go to application
2. Click **Documents** tab
3. Click **Upload Document**
4. Select document type:
   - Training Records
   - License Copies
   - Competency Records
   - Assessment Reports
   - Supporting Documents
5. Choose file (PDF, max 50MB)
6. Click **Upload**

### Document Types

| Document | Required | Purpose |
|----------|----------|---------|
| Training Records | Yes | Proof of training |
| License Copies | Yes | Verification of qualification |
| Competency Records | Yes | Demonstrated competency |
| Assessment Reports | Yes | Assessor findings |
| Supporting Documents | Optional | Additional evidence |

### Download Documents

1. Click document filename
2. File downloads automatically

### Version Control

- Each upload creates new version
- Previous versions kept in archive
- Access history available

---

## Assessments

### Schedule Assessment

1. Application status: **QA Review**
2. Click **Schedule Assessment**
3. Select assessor
4. Choose date and time
5. Confirm scheduling

### Conduct Assessment

**For Assessor:**
1. Go to **Assessments**
2. Find pending assessment
3. Complete assessment form
4. Rate competency (1-5)
5. Provide comments
6. Submit results

### Assessment Outcomes

- ✅ **Pass** - Proceed to HOD approval
- ❌ **Fail** - Return to applicant for retraining
- ⏸️ **Conditional** - Additional requirements needed

---

## Certifications

### Automatic Generation

Certificate automatically generated when:
1. All approvals completed
2. HQC issues final approval
3. System creates:
   - CA Number: CA/YYYY/XXXX
   - Issue Date: Current date
   - Expiry Date: 24 months later
   - QR Code: For verification

### Certificate Details

```
┌─────────────────────────────────┐
│ CERTIFICATION AUTHORIZATION     │
├─────────────────────────────────┤
│ CA Number:    CA/2026/0001      │
│ Issued To:    [Staff Name]      │
│ Date Issued:  04/06/2026        │
│ Date Expiry:  04/06/2028        │
│ Status:       ACTIVE            │
│ QR Code:      [QR IMAGE]        │
└─────────────────────────────────┘
```

### View Certificates

1. Go to **Certifications**
2. Search by CA number or staff name
3. Download PDF
4. Share QR code for verification

---

## Renewals

### Renewal Notifications

System sends automatic reminders:
- 📧 **30 days before expiry** - Start renewal process
- 📧 **14 days before expiry** - Urgent reminder
- 📧 **7 days before expiry** - Final notice
- 📧 **On expiry date** - Certification expired

### Initiate Renewal

1. Go to **Certifications**
2. Find expiring CA
3. Click **Renew**
4. System creates renewal application
5. Complete new application process
6. Submit for review

### Renewal Fast-Track

For renewals without changes:
- Previous documents auto-attached
- Status: "Renewal - Expedited"
- Faster approval process

---

## Reports & LCS

### Available Reports

| Report | View | Export |
|--------|------|--------|
| CA Issuance Trends | Dashboard | PDF, Excel |
| Renewal Compliance | Dashboard | PDF, Excel |
| LCS Updates | LCS Management | PDF, Excel |
| Assessment Results | Assessments | PDF, Excel |
| Approval Metrics | Approvals | PDF, Excel |
| Audit Trail | Admin | PDF, Excel |

### List of Certifying Staff (LCS)

**Automatically Updated:**
- When CA is issued
- Staff name added to Internal LCS
- Staff name added to Approved LCS
- Regulatory notification triggered

**Export LCS:**
1. Go to **Settings** → **LCS Management**
2. Click **Export**
3. Select format: Excel or PDF
4. Share with regulatory body

---

## FAQs & Troubleshooting

### Q: Can I edit an application after submission?
**A:** No. Once submitted, it enters the approval workflow. Contact QA Officer to return it to Draft status.

### Q: How long does approval take?
**A:** Typical timeline:
- QA Review: 2-3 days
- Assessment: 5-7 days
- HOD Approval: 1-2 days
- HQC Approval: 1 day
- **Total: 9-13 days**

### Q: What if my CA expires?
**A:** You cannot use an expired CA. Initiate renewal immediately. System will prevent use after expiry.

### Q: Can I have multiple CAs?
**A:** Yes. Each CA is for specific scope. Renew when expiring.

### Q: How do I reset my password?
**A:** Contact Administrator. Password reset available in Settings.

### Q: What if I lost my CA certificate?
**A:** Go to **Certifications**, download PDF again, or request reissue through Amendment application.

### Q: Can I request an extension instead of renewal?
**A:** Yes. Select "Extension" when creating new application. Shorter process than full renewal.

### Q: Who can approve applications?
**A:** 
- QA Officer (Document verification)
- HOD/E&MM (Recommendation)
- HQC (Final approval)

### Q: What documents are required?
**A:** Minimum required:
- Training Records
- License/Qualification Copies
- Competency Assessment
- Assessment Report

### Q: How long is CA valid?
**A:** Maximum 24 months from issue date.

### Q: Can I access CAMS offline?
**A:** No. CAMS requires internet connection and database access.

### I can't login

1. Verify email and password
2. Check Caps Lock
3. Wait 5 minutes (account may be locked)
4. Contact Administrator

### Application stuck in approval

1. Check with approver
2. Verify all documents uploaded
3. Contact Administrator if issue persists

### Document upload failed

1. Verify file is PDF
2. Check file size (max 50MB)
3. Check internet connection
4. Try different browser

---

## Keyboard Shortcuts

- `Ctrl+S` - Save (in forms)
- `Ctrl+Shift+R` - Refresh
- `Escape` - Close dialog
- `Tab` - Navigate between fields

---

## Support Contact

For issues or questions:
- Email: quality@tma.com
- Phone: Internal extension
- Internal Chat: #CAMS-Support

---

**Last Updated:** June 2026  
**Version:** 1.0.0-MVP
